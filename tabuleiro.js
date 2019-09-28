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

        if(this._tabuleiro[i][j] > 6){                         //Procura caso a peca seja preta
            for(var x =  0; x < this._pecasB.length; x++)
                if(this._pecasB[x].id == id)
                    return this._pecasB[x];
        }else{                                                  //Procura caso a peca seja branca
            for(var x =  0; x < this._pecasW.length; x++)
                if(this._pecasW[x].id == id)
                    return this._pecasW[x];
        }

        return null;
    }

    moverPeca(peca, i, j){
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.i == i && peca.j == j)
			return false;

		var x = peca.mover(this._tabuleiro, i, j);

        if(peca.comi == 1){

            if(peca.tipo == "B"){
                for(var k = 0; k < this._pecasW.length; k++)
                    if(this._pecasW[k].i == i && this._pecasW[k].j == j)
                        this._pecasW.splice(k, 1);
            }else{
                for(var k = 0; k < this._pecasB.length; k++)
                    if(this._pecasB[k].i == i && this._pecasB[k].j == j)
                        this._pecasB.splice(k, 1);
            }
            peca.comi = 0;
        }

        return x;
	}

    reiniciar(){

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