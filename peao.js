class peao extends peca{
    
    constructor(tipo, i, j, id){
        super(tipo, i, j, id);
    }

    mover(tabuleiro, i, j){
        if(i + 1 == super.i && j == super.j){
            tabuleiro[i][j] = tabuleiro[super.i][super.j];
            tabuleiro[super.i][super.j] = 0;
            super.id = "" + i + j;
        }
    }

}