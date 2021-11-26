//-------------Area del Cuadrado-----------------------------------------
function squareArea(x) {console.log("El area de tu Cuadrado es:"+" "+x*x)}

squareArea(prompt("Cuanto miden los lados de tu Cuadrado?"))
//------------Area del Rectangulo-----------------------------------------
function rectangleArea(y,z) {console.log("El area de tu Rectangulo es:"+" "+ y*z)}

rectangleArea(prompt("Cuanto mide la base de tu Rectangulo?"),prompt("Cuanto mide la altura de tu Rectangulo?"))
//-----------Area del Triangulo-------------------------------------------
function triangleArea(b,a){console.log("El area de tu Triangulo es:"+" "+ b*a/2)}

triangleArea(prompt("Cuanto mide la base de tu Triangulo?"),prompt("Cuanto mide la altura de tu Triangulo?"))


//--------------Edad-------------------------------------------------
function askEdad(e){
    if( e<17){console.log("Eres menor de edad por que tienes:"+" "+e)}
    else if(e=>18){console.log("Eres mayor de edad mi shavo,"+"tienes:"+e)}
    else{console.log("Por favor ingresa un numero valido")}}

askEdad(prompt("Que edad tienes?"))

//---------------Numero----------------------------------------------

function asknumber(n){
    if(n<0){console.log(n+" "+ "Tu numero es negativo")}
    else if(n==0){console.log(n+" "+ "Tu numero es igual a 0")}
    else if(n>0){console.log(n+" "+ "Tu numero es positivo")}
    else{console.log("Por favor ingresa un numero valido")}
}

asknumber(prompt("Ingresa un numero"))

//------------------Vocal--------------------------------------------