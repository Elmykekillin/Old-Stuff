//var numero= prompt("Introduce un numero")
//var division= numero % 2

//if (division ===0) {console.log (numero + ":" +"Tu numero es Par" ) } 
//else if (division ===1) { console.log (numero+ ":" + "Tu numero es Impar" ) }
//else { console.log ("Por favor introduce un numero valido") }
//------------------------[ variables]----------------------------------------------------------------------------------
var ask =prompt("Quieres jugar contra la maquina" + " " + "o" + " " + "contra otro jugador?" )
 if(ask==="jugador"){var askinput=prompt("Piedra" + " " + "Papel" + " "  +  " " + "o"  + " " + "Tijera")
 var askinput2=prompt("Piedra" + " " + "Papel" + " "  +  " " + "o"  + " " + "Tijera")
}
else if(ask==="maquina"){var askplayer=prompt("Piedra" + " " + "Papel" + " "  +  " " + "o"  + " " + "Tijera")}
var cpuinput = ["piedra","papel","tijera" ]
var randomElement = cpuinput[Math.floor(Math.random() * cpuinput.length)]
//-----------------------[ Condiciones]---------------------------------------------------------------------------------

//                                              [ Player 1 Win ]
if ( askinput==="piedra" && askinput2==="tijera") {console.log("Gana el jugador 1" + " "  + "Piedra le gana a Tijera")} 
if ( askinput==="papel" && askinput2==="piedra") {console.log("Gana el jugador 1" + " "  + "Papel le gana a Piedra")}
if ( askinput==="tijera" && askinput2==="papel") {console.log("Gana el jugador 1" + " "  + "Tijera le gana a Papel")}
//                                             [ Player 2 Win ]
if ( askinput==="piedra" && askinput2==="papel") {console.log("Gana el jugador 2" + " "  + "Papel le gana a Piedra")}
if ( askinput==="papel" && askinput2==="tijera") {console.log("Gana el jugador 2" + " "  + "Tijera le gana a Papel")}
if ( askinput==="tijera" && askinput2==="piedra") {console.log("Gana el jugador 2" + " "  + "Piedra le gana a Tijera")}
//                                                 [ Draw ]
if ( askinput==="piedra" && askinput2==="piedra") {console.log("Empate" + " "  + "Piedra no le puede ganar a Piedra")}
if ( askinput==="papel" && askinput2==="papel") {console.log("Empate" + " "  + "Piedra no le puede ganar a Piedra")}
if ( askinput==="tijera" && askinput2==="tijera") {console.log("Empate" + " "  + "Tijera no le pueden ganar a Tijeras")}

//--------------------------------------------------[vs cpu]-------------------------------------------------------------

//                                              [ Player 1 Win ]
if ( askplayer==="piedra" && randomElement==="tijera") {console.log("Gana el jugador 1" + " "  + "Piedra le gana a Tijera")} 
if ( askplayer==="papel" && randomElement==="piedra") {console.log("Gana el jugador 1" + " "  + "Papel le gana a Piedra")}
if ( askplayer==="tijera" && randomElement==="papel") {console.log("Gana el jugador 1" + " "  + "Tijera le gana a Papel")}
//                                             [ Player 2 Win ]
if ( askplayer==="piedra" && randomElement==="papel") {console.log("Gana el jugador 2" + " "  + "Papel le gana a Piedra")}
if ( askplayer==="papel" && randomElement==="tijera") {console.log("Gana el jugador 2" + " "  + "Tijera le gana a Papel")}
if ( askplayer==="tijera" && randomElement==="piedra") {console.log("Gana el jugador 2" + " "  + "Piedra le gana a Tijera")}
//                                                 [ Draw ]
if ( askplayer==="piedra" && randomElement==="piedra") {console.log("Empate" + " "  + "Piedra no le puede ganar a Piedra")}
if ( askplayer==="papel" && randomElement==="papel") {console.log("Empate" + " "  + "Piedra no le puede ganar a Piedra")}
if ( askplayer==="tijera" && randomElement==="tijera") {console.log("Empate" + " "  + "Tijera no le pueden ganar a Tijeras")}
