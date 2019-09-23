class peca {
    constructor(tipo, i, j, id){
        this._tipo = tipo;
        this._i = i;
        this._j = j;
        this._id = id;
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
}