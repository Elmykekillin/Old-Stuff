import React ,{useEffect,useState}from "react";
import axios from "axios";
const Home=()=>{
    const URL_BASE=(`https://goodreads-devf-aaron.herokuapp.com/`)
    const END_POINT=(`/api/v1/authors`)
    const[data,setData]=useState([])
    const get=async()=>{
        try{
            const response=await axios.get(`${URL_BASE}${END_POINT}`)
            setData(response.data)
        
        }
        catch(err){
            console.log(err)
        }
    }

     const nombre=()=>{
         for (let i = 0; i < data.length/3; i++) {
            let div=document.createElement("div")
            let h2=document.createElement("h2")
            let nombre=`${data[i].name}`
            document.getElementById("nombre").appendChild(div).appendChild(h2).appendChild(document.createTextNode(nombre))   
         }
     }
     const apellido=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let apellido=`${data[i].last_name}`
           document.getElementById("apellido").appendChild(div).appendChild(h2).appendChild(document.createTextNode(apellido))
        }
    }
    const nacionalidad=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let nacionalidad=`${data[i].nacionalidad}`
           document.getElementById("nacionalidad").appendChild(div).appendChild(h2).appendChild(document.createTextNode(nacionalidad))
        }
    }

    const genero=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let genero=`${data[i].gender}`
           document.getElementById("genero").appendChild(div).appendChild(h2).appendChild(document.createTextNode(genero))  
        }
    }

    const comentario=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let comentario=`${data[i].biography}`
           document.getElementById("comentario").appendChild(div).appendChild(h2).appendChild(document.createTextNode(comentario)) 
        }
    }

    const id=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let id=`${data[i].id}`
           document.getElementById("id").appendChild(div).appendChild(h2).appendChild(document.createTextNode(id))
        }
    }

    const edad=()=>{
        for (let i = 0; i < data.length/3; i++) {
           let div=document.createElement("div")
           let h2=document.createElement("h2")
           let edad=`${data[i].age}`
          document.getElementById("edad").appendChild(div).appendChild(h2).appendChild(document.createTextNode(edad)) 
        }
    }



    useEffect(()=>{
    get()
    },[])

    useEffect(()=>{
        setData(data)
        nombre()
        apellido()
        nacionalidad()
        genero()
        comentario()
        edad()
        id()

    },[data])
    
    console.log(data)

return(

<>
<div className="titulos">
    <h1>Nombre</h1>
    <h1>Apellido</h1>
    <h1>Nacionalidad</h1>
    <h1>Genero</h1>
    <h1>Comentario</h1>
    <h1>Edad</h1>
    <h1>ID</h1>
</div>
<div className="lista" id="lista">
    <div id="nombre" className="nombre"></div>
    <div id="apellido" className="apellido"></div>
    <div id="nacionalidad" className="nacionalidad"></div>
    <div id="genero" className="genero"></div>
    <div id="comentario" className="comentario"></div>
    <div id="edad" className="edad"></div>
    <div id="id" className="id"></div>

</div>
</>

)

}

export default Home