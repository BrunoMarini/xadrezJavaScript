class peca {
    constructor(tipo, i, j, id){
        this._tipo = tipo;
        this._i = i;
        this._j = j;
        this._id = id;
        this._comi = 0;
    }

    get comi(){
        return this._comi;
    }

    set comi(comi){
        this._comi = comi;
    }

    get id(){
        return this._id;
    }

    get i(){
        return this._i;
    }

    get j(){
        return this._j;
    }

    get tipo(){
        return this._tipo;
    }

    set id(id){
        this._id = id;
    }

    set i(i){
        this._i = i;
    }

    set j(j){
        this._j = j;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }
}