class bispo extends peca{
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
        
        var vertical = 0;
        var horizontal = 0;
        var flag = 0;

        if(tabuleiro[x][y] > 6 && super.tipo == 'W' || tabuleiro[x][y] < 7 && super.tipo == 'B' && tabuleiro[x][y] != 0 || tabuleiro[x][y] == 0){              
        
            if(tabuleiro[x][y] != 0){
                flag = 1;
            }

            if(Math.abs(x - super.i) == Math.abs(y - super.j)){     //Esta em uma diagonal possivel 
                
                if(x > super.i){                                    
                    if(y > super.j){                                //Pra "baixo | direita"
                    //console.log("BAIXO DIREITA");
                        vertical = 1;
                        horizontal = 1;
                    }else{                                          //Pra "baixo | esquerda"
                    //console.log("BAIXO ESQUERDA");
                        vertical = 1;
                        horizontal = -1;                                
                    }
                }else{
                    if(y > super.j){                                //Pra "cima | direita"
                    //console.log("CIMA DIREITA");
                        vertical = -1;
                        horizontal = 1;
                    }else{                                          //Pra "cima | esquerda"
                    //console.log("CIMA ESQUERDA");
                        vertical = -1;
                        horizontal = -1;
                    }
                }
                
                var m = vertical;
                var l = horizontal;

                for(var k = 0; k < Math.abs(x - super.i) - 2; k++){
      
                    if(tabuleiro[super.i + vertical][super.j + horizontal] != 0){
                        return -1;
                    }

                    vertical += m;
                    horizontal += l;

                }
                super.comi = flag;
                return 1;
            }
        }
    }
}