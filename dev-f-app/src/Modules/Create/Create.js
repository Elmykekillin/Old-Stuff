import React,{useState,useEffect} from "react";
import axios from "axios";

const Create=()=>{
const[name,setName]=useState("")
const[lastname,setLastname]=useState("")
const[nacionalidad,setNacionalidad]=useState("")
const[biography,setBiography]=useState("")
const[gender,setGender]=useState("")
const[age,setAge]=useState()
const[isalive,setIsalive]=useState()
const[data,setData]=useState([])
const jsonToSend = {
    "name" : name,
    "last_name": lastname,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age,
    "is_alive": isalive
}



const handleNameChange= event => {
    setName(event.target.value)}

const handleLastNameChange= event => {
    setLastname(event.target.value)}
    
const handleNacionalidadChange= event => {
    setNacionalidad(event.target.value.toUpperCase())}
    
const handleBiographyChange= event => {
    setBiography(event.target.value)}

const handleGenderChange= event => {
    setGender(event.target.value.toUpperCase())}

const handleAgeChange= event => {
    setAge(parseFloat(event.target.value))}

const handleIsAliveChange= event => {
    const respuesta=(event.target.value).toUpperCase()
     if(respuesta==="YES"){setIsalive(true)}
     else{setIsalive(false)}

    }    

 const handleSumbit= async(e)=>{
     e.preventDefault()
     try{
        await axios.post(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`,jsonToSend).then(res => setData(res.data))
    
     }
     
     catch(err){
         console.log(err)
     }
    
    }

useEffect(()=>{
let h2=document.createElement("h2")

if(data.id){
    h2.appendChild(document.createTextNode(`ID del Elemento Creado:${data.id}`))
document.getElementById("form").appendChild(h2)
}

},[data])
    

const control=()=>{
    console.log(jsonToSend)
}

return(

<form onSubmit={handleSumbit} id="form">
<input type="text" id="name" placeholder="Name" onChange={handleNameChange}></input>

<input type="text" id="Last_Name" placeholder="Last Name" onChange={handleLastNameChange}></input>

<input type="text" id="nacionalidad" placeholder="Nationality" onChange={handleNacionalidadChange}></input>

<input type="text" id="biography" placeholder="Biography" onChange={handleBiographyChange}></input>

<input type="text" id="gender" placeholder="Gender" onChange={handleGenderChange}></input>

<input type="number" id="age" placeholder="Age" onChange={handleAgeChange}></input>

<input type="text" id="is_alive" placeholder="¿Is Alive?(YES or NO)" onChange={handleIsAliveChange}></input>

<button type="submit">Create</button>

<button type="button" onClick={control}>control</button>
</form>

)

}

export default Create