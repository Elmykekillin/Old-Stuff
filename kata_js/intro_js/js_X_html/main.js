
function test(){
 var in1 =document.getElementById("nombre").value 
var in2=document.getElementById("direccion").value 
var in3=document.getElementById("telefono").value 
var si=document.getElementById("myyes")
var no=document.getElementById("myno")
var p1=document.getElementById("myp1")
var p2=document.getElementById("myp2")
var p3=document.getElementById("myp3")
var p4=document.getElementById("myp4")
document.getElementById("mycard").style.display = "block";

p1.innerHTML=in1
p2.innerHTML=in2
p3.innerHTML=in3

if(si.checked && no.checked){
    p4.innerHTML="La pizza lleva mitad piña"
    var img = document.createElement("img"); 
    img.setAttribute("height","200px")
    img.setAttribute("widht","200px")
    img.src = "https://5dc93791f535c5b6680b-504f722ff1ef8102127dae26bdb15aa6.ssl.cf1.rackcdn.com/pix_1_337_108979_57c9daa55f629.jpg"; 
    var src = document.getElementById("myx"); 
     
    src.appendChild(img); 
}
else if(si.checked){p4.innerHTML="Con Piña"
var img = document.createElement("img"); 
img.setAttribute("height","150px")
img.setAttribute("widht","150px")
img.src = "https://as00.epimg.net/epik/imagenes/2017/10/31/portada/1509469785_213048_1509471547_noticia_normal.jpg"; 
var src = document.getElementById("myx"); 
 
src.appendChild(img); 
}
else if(no.checked){p4.innerHTML="Sin Piña"
var img = document.createElement("img"); 
img.setAttribute("height","200px")
img.setAttribute("widht","200px")
img.src = "https://www.360bistrobar.com/wp-content/uploads/sites/16/2017/02/pepperoni-pizza.jpg"; 
var src = document.getElementById("myx"); 
 
src.appendChild(img); 

}
    else{p4.innerHTML="No se espesifico"}

}

var mybtn=document.getElementById("myboton")
mybtn.addEventListener("click",test)

var mybtn2=document.getElementById("myboton2")
function volver(){
    window.location.reload()
}

mybtn2.addEventListener("click",volver)