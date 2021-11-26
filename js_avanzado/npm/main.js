const request = require('request')


const pokeapi=()=>{
    request.get("https://pokeapi.co/api/v2/pokemon/entei",(error,response,body)=>{
       
     if(response.statusCode===200){
         const pokedata=JSON.parse(body)

        const types=pokedata.types

        console.log(types)
     }

    })

}

pokeapi()

const consultaLibro=()=>{
request.get("")
}

consultaLibro()