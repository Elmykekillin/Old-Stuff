class Three {
    constructor(Left,Right){
        this.Left=Left
        this.Right=Right

    }
}

class Root{
    constructor(DataA,DataB){
        this.DataA=DataA
        this.DataB=DataB

    }
}

let ArbolA= new Three(new Root("a","b"),new Root("a","b"))
console.log("Arbol A:")
console.log(ArbolA)

let ArbolB= new Three(new Root("a","b"),new Root("a","b"))
console.log("Arbol B:")
console.log(ArbolB)

let Compare=(a,b)=>{
 let A =JSON.stringify(a)
 let B =JSON.stringify(b)
 let DatosA=A.length
 let DatosB=B.length
 let Resultados=(DatosA===DatosB)
 console.log(Resultados)
if(Resultados===false){
 console.log("El arbol A y el arbol B no son Identicos")
}

else if(Resultados===true){
    console.log("El arbol A si es Identico al arbol B ")
}
}

Compare(ArbolA,ArbolB)

console.log("----------------------------------------------------------------")
/*--------------------------------------------------Ejercicio 2------------------------------------------------------------------------ */

let copia=(x)=>{
    console.log(x)
let ArbolC=Object.assign({},x)
console.log("Copia:")
console.log(ArbolC)

}

copia(ArbolB)