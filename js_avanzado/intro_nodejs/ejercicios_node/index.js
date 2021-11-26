let llamada=()=>{
    console.log("Hola")

    setTimeout(() => {
        return console.log("desde el Callback")
    }, 5000);
}

llamada()




setTimeout(() => {
    

let llamada2=(a,callback)=>{
  console.log("Los boneless estan ricos?")
    a=true

    setTimeout(callback=() => {
    console.log(typeof a)
    console.log(a)
    },5000);

}

llamada2()

},6000

)

setTimeout(() => {

   let llamada3=(b,callback2)=>{

    b="PeJeLaGaRtO"

    setTimeout(callback2=() => {
        console.log("Original:"+" "+b)

       console.log ("Minusculas")
    
         console.log(b.toLowerCase())
    
        console.log("Mayusculas")
       
         console.log(b.toUpperCase())
    

    },8000);

   } 
    

   llamada3()
}, 7000);