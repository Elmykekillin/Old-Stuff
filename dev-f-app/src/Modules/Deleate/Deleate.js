import React ,{useState}from "react";
import axios from "axios";

const Deleate=()=>{
 const URL_BASE="https://goodreads-devf-aaron.herokuapp.com/"
 const END_POINT="api/v1/authors/"
 const[id,setId]=useState()

 const handleIdChange= event => {
    setId(parseFloat(event.target.value))}   
    
    const handleSumbit= async(e)=>{
        let h2=document.createElement("h2")
        e.preventDefault()
        try{
           await axios.delete(`${URL_BASE}${END_POINT}${id}`)
           h2.appendChild(document.createTextNode(`Elemento Borrado con Exito`))
           document.getElementById("form").appendChild(h2)
         
        }
        
        catch(err){
            console.log(err)
            if(err){
                h2.appendChild(document.createTextNode(`El Elemento con el ID: ${id} ya ha sido eliminado`))
                document.getElementById("form").appendChild(h2)
            }
        }
       
       }

return(

<>
<form id="form" onSubmit={handleSumbit}>
<input type="text" id="id" placeholder="Id to Deleate" onChange={handleIdChange}></input>
<button type="sumbit">Deleate</button>
</form>
</>

)

}

export default Deleate