class peao extends peca{
    
    constructor(tipo, i, j, id){
        super(tipo, i, j, id);
        this._numMovimento = 1;
    }

    mover(tabuleiro, x, y){
        //console.log(tabuleiro);
        //console.log("De linha: " + super.i + " Coluna: " + super.j + " -> Linha: " + x + " Coluna: " + y);
        if(this.verificaPodeMovimentar(tabuleiro, x, y) == 1){
            tabuleiro[x][y] = tabuleiro[super.i][super.j];
            tabuleiro[super.i][super.j] = 0;
            super.i = x;
            super.j = y;
            super.id = "" + x + y;   
        }
    }

    verificaPodeMovimentar(tab, x, y){
        //console.log("vou verificar");
        //console.log(super.tipo);
        if(super.tipo == 'B'){
            //console.log("preta");
            if(super.j == y){                                         //Se a coluna for a mesma
                //console.log("mesma linha");
                if(x + 1 == super.i){                                 //Andando apenas um bloco
                    //console.log("é bloco adjacente");
                    if(tab[x][y] == 0)                                //Tem alguem na frente
                        return 1;
                }else if(x + 1 + this._numMovimento == super.i){      //Andando dois blocos
                    if(tab[x + 1][y] == 0 && tab[x][y] == 0){         //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }
            }else{                                                        //Não vai para a mesma coluna
                if(super.j - 1 == y || super.j + 1 == y){             //Verifica se e uma colunas adjacente
                    if(super.i - 1 == x){                             //Verifica se esta localizada na linha de cima
                        if(tab[x][y] < 7 && tab[x][y] != 0){          //Verifica se tem uma peca pra comer
                            return 1;
                        }
                    }
                }
            }
        }else{
            if(super.j == y){                                         //Se a coluna for a mesma
                if(x - 1 == super.i){                                 //Andando apenas um bloco
                    if(tab[x][y] == 0)                                //Tem alguem na frente
                        return 1;
                }else if(x - 1 - this._numMovimento == super.i){      //Andando dois blocos
                    if(tab[x - 1][y] == 0 && tab[x][y] == 0){         //Tem alguem na frente
                        this._numMovimento = 0;
                        return 1;
                    }
                }
            }else{    
                if(super.j - 1 == y || super.j + 1 == y){             //Verifica se e uma colunas adjacente
                    if(super.i + 1 == x){                             //Verifica se esta localizada na linha de cima
                        if(tab[x][y] > 6){          //Verifica se tem uma peca pra comer
                            return 1;
                        }
                    }
                }
            }
        }       

        return -1;
    }

}