class rainha extends peca{
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

        var comedor = 0;
        var ret = 0;
        var vertical;
        var horizontal;

        if(tab[x][y] > 6 && super.tipo == 'W' || tab[x][y] < 7 && super.tipo == 'B' && tab[x][y] != 0 || tab[x][y] == 0){
            
            if(tab[x][y] != 0)
                comedor = 1;
        
            if(super.i == x){                //Se o movimento for na mesma linha
            
                if(y > super.j){
                    for(var k = super.j + 1; k < y; k++){
                        if(tab[x][k] != 0)
                            return -1;
                    }
                    super.comi = comedor; 
                    return 1;
                }else{
                    for(var k = y + 1; k < super.j; k++){
                        if(tab[x][k] != 0)
                            return -1;
                    }
                }
                super.comi = comedor; 
                return 1;
            }else if(super.j == y){          //Se o movimento for na mesma coluna
                
                if(x > super.i){
                    for(var k = super.i + 1; k < x; k++){
                        if(tab[k][y] != 0)
                            return -1;
                    }
                    super.comi = comedor; 
                    return 1;
                }else{
                    for(var k = x + 1; k < super.i; k++){
                        if(tab[k][y] != 0)
                            return -1;
                    }
                    super.comi = comedor; 
                    return 1;
                }
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
      
                    if(tab[super.i + vertical][super.j + horizontal] != 0){
                        return -1;
                    }

                    vertical += m;
                    horizontal += l;

                }
                super.comi = comedor; 
                return 1;
            }
        }
    }
}