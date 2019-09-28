class rei extends peca{
    constructor(tipo, i, j, id){
        super(tipo, i, j, id);
    }

    mover(tabuleiro, x, y){
        if(this.verificaPodeMovimentar(tabuleiro, x, y) == 1){
            tabuleiro[x][y] = tabuleiro[super.i][super.j];
            tabuleiro[super.i][super.j] = 0;
            super.i = x;
            super.j = y;
            super.id = "" + x + y;   
            return true;
        }
        return false;
    }

    verificaPodeMovimentar(tabuleiro, x, y){
        
    var flag = 0;

        if(tabuleiro[x][y] > 6 && super.tipo == 'W' || tabuleiro[x][y] < 7 && super.tipo == 'B' && tabuleiro[x][y] != 0 || tabuleiro[x][y] == 0){              
        
            if(tabuleiro[x][y] != 0){
                flag = 1;
            }

            if(x == super.i - 1 && y == super.j - 1 || x == super.i - 1 && y == super.j || x == super.i - 1 && y == super.j + 1 ||
                x == super.i && y == super.j - 1 || x == super.i && y == super.j + 1 || 
                    x == super.i + 1 && y == super.j - 1 || x == super.i + 1 && y == super.j || x == super.i + 1 && y == super.j + 1){

                super.comi = 1;
                return 1;

            }

            return -1;

        }
    }
}