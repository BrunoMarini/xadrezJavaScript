class torre extends peca{
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

    verificaPodeMovimentar(tab, x, y){
        
        
        if(tab[x][y] != 0){
            super.comi = 1;
            if(super.tipo == "B"){
                if(tab[x][y] > 6)
                    return -1;
            }else{
                if(tab[x][y] < 7)
                    return -1;
            }
        }
        
        if(super.i == x){                //Se o movimento for na mesma linha
            
            if(y > super.j){
                for(var k = super.j + 1; k < y; k++){
                    if(tab[x][k] != 0)
                        return -1;
                }
                return 1;
            }else{
                for(var k = y + 1; k < super.j; k++){
                    if(tab[x][k] != 0)
                        return -1;
                }
            }
            return 1;
        }else if(super.j == y){          //Se o movimento for na mesma coluna
            
            if(x > super.i){
                for(var k = super.i + 1; k < x; k++){
                    if(tab[k][y] != 0)
                        return -1;
                }
                return 1;
            }else{
                for(var k = x + 1; k < super.i; k++){
                    if(tab[k][y] != 0)
                        return -1;
                }
                return 1;
            }
        }
    }
}