//for(i=100;i>=0;i=i-1){
 //   console.log(i)}
//console.log("-------barrita espaciadora------------")
//for (var x=0;x<=500;x=x+50){
 //   console.log(x)}
//console.log("-------barrita espaciadora------------")
//for(var x=100; x>=-100; x=x-10){
  //  console.log(x)}

  //------------------------Exercise 1-------------------------------------
for(i=1;i<=100;i=i+1){
    if(i%2==0){console.log(i+" "+ "Par")}
    else if(i%2!==0){console.log(i+" "+ "Inpar")}
}

console.log("--------------------Barra Espaciadora----------------------")

//-------------------------Excercice 2-------------------------------------
for(x=1;x<=100;x=x+1){
    if(x%3==0&&x%5==0){console.log(x+" "+"FizzBuzz")}
   else if(x%3==0){console.log(x+" "+ "Fizz")}
    else if(x%5==0){console.log(x+ " "+"Buzz")}
    else{console.log(x)}
}
