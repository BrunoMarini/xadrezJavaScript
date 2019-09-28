class peao extends peca{
    
    constructor(tipo, i, j, id){
        super(tipo, i, j, id);
        this._numMovimento = 1;
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
        if(super.tipo == 'B'){
            if(super.j == y){                                         //Se a coluna for a mesma
                if(x + 1 == super.i){                                 //Andando apenas um bloco
                    if(tab[x][y] == 0){                                //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }else if(x + 1 + this._numMovimento == super.i){      //Andando dois blocos
                    if(tab[x + 1][y] == 0 && tab[x][y] == 0){         //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }
            }else{                                                    //Não v/Não vai para a mesma coluna
                if(super.j - 1 == y || super.j + 1 == y){             //Verifica se e uma colunas adjacente
                    if(super.i - 1 == x){                             //Verifica se esta localizada na linha de cima
                        if(tab[x][y] < 7 && tab[x][y] != 0){          //Verifica se tem uma peca pra comer
                            this._numMovimento = 0;
                            super.comi = 1;
                            return 1;
                        }
                    }
                }
            }
        }else{
            if(super.j == y){                                         //Se a coluna for a mesma
                if(x - 1 == super.i){                                 //Andando apenas um bloco
                    if(tab[x][y] == 0){                                //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }else if(x - 1 - this._numMovimento == super.i){      //Andando dois blocos
                    if(tab[x - 1][y] == 0 && tab[x][y] == 0){         //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }
            }else{    
                if(super.j - 1 == y || super.j + 1 == y){             //Verifica se e uma colunas adjacente
                    if(super.i + 1 == x){                             //Verifica se esta localizada na linha de cima
                        if(tab[x][y] > 6){                            //Verifica se tem uma peca pra comer
                            this._numMovimento = 0;
                            super.comi = 1;
                            return 1;
                        }
                    }
                }
            }
        }       

        return -1;
    }

}