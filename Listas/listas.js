class Nodo {
    constructor(dato,siguiente){
this.dato=dato
this.siguiente=siguiente
    }
}

class listaEnlazada{
    constructor(){
        this.inicio= null
        this.tamaño=0
    }
}

let Nodos= new Nodo(10,"siguiente")
console.log(Nodos)

