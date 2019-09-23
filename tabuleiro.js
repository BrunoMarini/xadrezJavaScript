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
	    this._pecasB = [];
        this._pecasP = [];

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
            this._pecasB.push(new peao('B', 1, i, "" + 1 + i));
            this._tabuleiro[1][i] =  this._W_PAWN;
            
            this._pecasP.push(new peao('P', 6, i, "" + 6 + i));
            this._tabuleiro[6][i] =  this._B_PAWN;
        }
    }

    peca(i, j){

        var id = "" + i + j;

        for(var x = 0; x < 16; x++){
            if(this._pecasB[x].id == id){
                console.log(this._pecasB[x]);
                return this._pecasB[x];
            }
            if(this._pecasP[x].id == id){
                console.log(this._pecasP[x]);
                return this._pecasP[x];
            }
        }
    }

    realizarMovimento(peca, i, j){
        peca.mover(this._tabuleiro, i, j);
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

}