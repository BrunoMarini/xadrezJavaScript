class cavalo extends peca{
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
        }
    }

    verificaPodeMovimentar(tab, x, y){
        if(tab[x][y] == 0){
            if(Math.abs(super.i - x) == 2 && Math.abs(super.j - y) == 1){
                return 1;
            }else if(Math.abs(super.i - x) == 1 && Math.abs(super.j - y) == 2){
                return 1;
            }
        }else{
            if(super.tipo == 'B'){
                if(tab[x][y] < 7){
                    if(Math.abs(super.i - x) == 2 && Math.abs(super.j - y) == 1){
                        return 1;
                    }else if(Math.abs(super.i - x) == 1 && Math.abs(super.j - y) == 2){
                        return 1;
                    }
                }
            }else{
                if(tab[x][y] > 6){
                    if(Math.abs(super.i - x) == 2 && Math.abs(super.j - y) == 1){
                        return 1;
                    }else if(Math.abs(super.i - x) == 1 && Math.abs(super.j - y) == 2){
                        return 1;
                    }
                }
            }
        }

        return -1;
    }
}