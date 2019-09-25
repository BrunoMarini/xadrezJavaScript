class Tabuleiro {
    
    constructor(){
        
        this._W_KING   = 1;  // "&#9812" ♔
        this._W_QUEEN  = 2;  // "&#9813" ♕
        this._W_ROOK   = 3;  // "&#9814" ♖
        this._W_BISHOP = 4;  // "&#9815" ♗
        this._W_KNIGHT = 5;  // "&#9816" ♘
        this._W_PAWN   = 6;  // "&#9817" ♙
        this._B_KING   = 7;  // "&#9818" ♚
        this._B_QUEEN  = 8;  // "&#9819" ♛
        this._B_ROOK   = 9;  // "&#9820" ♜
        this._B_BISHOP = 10; // "&#9821" ♝
        this._B_KNIGHT = 11; // "&#9822" ♞
        this._B_PAWN   = 12; // "&#9823" ♟

        this._tabuleiro = new Array(8);
	    this._pecasW = [];
        this._pecasB = [];

        for(var i = 0; i < 8; i++) {
            this._tabuleiro[i] = new Array(8);
            for(var j = 0; j < 8; j++)
            this._tabuleiro[i][j] = 0; // ID_1 = 0
        }
    }

    get tabuleiro(){
        return this._tabuleiro;
    }

    colocarPecas(){
        for(var i = 0; i < 8; i++){
            this._pecasW.push(new peao('W', 1, i, "" + 1 + i));
            this._tabuleiro[1][i] =  this._W_PAWN;
            
            this._pecasB.push(new peao('B', 6, i, "" + 6 + i));
            this._tabuleiro[6][i] =  this._B_PAWN;
        }

        for(var i = 0, j = 0; j < 2; i = 7, j++){
            this._pecasW.push(new torre('W', 0, i, "" + 0 + i));
            this._tabuleiro[0][i] =  this._W_ROOK;
            this._pecasB.push(new torre('B', 7, i, "" + 7 + i));
            this._tabuleiro[7][i] =  this._B_ROOK;
        }
        for(var i = 1, j = 0; j < 2; i = 6, j++){
            this._pecasW.push(new cavalo('W', 0, i, "" + 0 + i));
            this._tabuleiro[0][i] =  this._W_KNIGHT;
            this._pecasB.push(new cavalo('B', 7, i, "" + 7 + i));
            this._tabuleiro[7][i] =  this._B_KNIGHT;
        }
        for(var i = 2, j = 0; j < 2; i = 5, j++){
            this._pecasW.push(new bispo('W', 0, i, "" + 0 + i));
            this._tabuleiro[0][i] =  this._W_BISHOP;
            this._pecasB.push(new bispo('B', 7, i, "" + 7 + i));
            this._tabuleiro[7][i] =  this._B_BISHOP;
        }

        this._pecasW.push(new rainha('W', 0, 3, "" + 0 + 3));
        this._tabuleiro[0][3] =  this._W_QUEEN;
        this._pecasB.push(new rainha('B', 7, 3, "" + 7 + 3));
        this._tabuleiro[7][3] =  this._B_QUEEN;

        this._pecasW.push(new rei('W', 0, 4, "" + 0 + 4));
        this._tabuleiro[0][4] =  this._W_KING;
        this._pecasB.push(new rei('B', 7, 4, "" + 7 + 4));
        this._tabuleiro[7][4] =  this._B_KING;
    }

    peca(i, j){

        var id = "" + i + j;
        var p;
        var flag = 0;

        for(var x = 0; x < 16; x++){
            if(this._pecasW[x].id == id){
                p = this._pecasW[x];
                flag++;
            }
            if(this._pecasB[x].id == id){
                p = this._pecasB[x];
                flag++;
            }
        }

        if(flag == 1)
            return p;
        else if(flag == 2){
            if(this.tabuleiro[i][j] > 6){
                for(var x = 0; x < 16; x++){
                    if(this._pecasB[x].id == id){
                        return this._pecasB[x];
                    }
                }
            }else{
                for(var x = 0; x < 16; x++){
                    if(this._pecasW[x].id == id){
                        return this._pecasW[x];
                    }
                }
            }
        }

        return null;
    }

    realizarMovimento(peca, i, j){

        peca.mover(this._tabuleiro, i, j);

    }

}

    // removerPeca(peca, i, j){
    //     console.log(this._tabuleiro);
    //     var tipo = this._tabuleiro[peca.id[0]][peca.id[1]];
    //     this._tabuleiro[peca.id[0]][peca.id[1]] = 0;
    //     console.log(this._tabuleiro);
    //     return tipo;
    // }
    // addPeca(peca, i, j, tipo){
    //     console.log(this._tabuleiro);
    //     peca.id = "" + i + j;
    //     console.log(tipo);
    //     this._tabuleiro[i][j] = tipo;
    //     console.log(this._tabuleiro);
    // }