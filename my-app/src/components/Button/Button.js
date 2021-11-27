import React,{Component} from "react"
import axios from "axios"
import Card from "../Card/Card"
class Button extends Component{

  state={
      card:<Card/>
  }

 componentDidMount(){
     axios.get("https://pokeapi.co/api/v2/pokemon/gengar")
     .then(res=>{
       
        const data=res.data
        this.setState({data})


     })
 }


 render(){

  return(

   <button className="Boton"> picame</button>

  )

 }


}

export default Button
