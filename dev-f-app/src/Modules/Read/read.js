import React,{useState,useEffect} from "react";
import axios from "axios"
import List from "../List/List";

const Read=()=>{

    const URL_BASE=(`https://goodreads-devf-aaron.herokuapp.com/`)
    const END_POINT=(`/api/v1/authors`)
    const[id,setId]=useState([])
    const[vivo,setVivo]=useState("")
    const[data,setData]=useState([])

    const handleButton=()=>{
        let search=document.getElementById("search")
        setId(search.value)
    }

    const get= async()=>{
        try{
         const response =await axios.get(`${URL_BASE}${END_POINT}/${id}`)
         setData(response.data)
         
            if(data[0]?.is_alive===true){setVivo("Yes")}
            else if(data[0]?.is_alive===false){setVivo("No")}
        
        }

        catch(err){
            let h2=document.createElement("h2")
            console.log(err)  
            h2.appendChild(document.createTextNode(`Se encontro un error al buscar el ID: ${err}`))
            document.getElementById("error").appendChild(h2)

        }
    }
    
    useEffect(()=>{
        setData(data)
    },[data])
    console.log(data)

    useEffect(()=>{
        setId(id)
        get()
    },[id])

    return(
        <>
       <List
       name={data?.name}
       last_name={data?.last_name}
       nacionalidad={data?.nacionalidad}
       gender={data?.gender}
       biography={data?.biography}
       is_alive={vivo}
       id={data?.id}
       />
       <input type="text" id="search" placeholder="Busca una Entrada"></input>
       <button onClick={handleButton}>Search</button>
       <alert id="error"></alert>
        </>
    )

}

export default Read