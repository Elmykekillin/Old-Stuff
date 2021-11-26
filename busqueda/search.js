const Array=["a",1,"b",2,"c",3,"d",4,"e",5]
const Array2=[11,4,133,415,500,13,2,1]
const Array3=[11,4,-133,1,415,500,13,2,]

console.log("---------------------Ejercicio2---------------------------------")

let buscaLetras=(a)=>{
 console.log("Array:")
 console.log(a)

let separar=a.sort()
console.log("Array organizado:")
console.log(separar)

for (let i = 0; i < separar.length; i++) {
if(separar[0]=Number){separar.shift()}
    
}
console.log("Resultado:")
console.log(separar)
}

buscaLetras(Array)

console.log("---------------------Ejercicio3---------------------------------")

let numMasGrande=(b)=>{
    console.log("Array:")
    console.log(b)
 
    let Masgrande=Math.max.apply(null,b)

console.log("Numero mas grande del Array:")
console.log(Masgrande)
}

numMasGrande(Array2)

console.log("---------------------Ejercicio4---------------------------------")

let numMasPequeno=(b)=>{
    console.log("Array:")
    console.log(b)

    let Maspequenio=Math.min.apply(null,b)

console.log("Numero mas pequeñio del Array:")
console.log(Maspequenio)
}

numMasPequeno(Array3)

console.log("---------------------Ejercicio5---------------------------------")