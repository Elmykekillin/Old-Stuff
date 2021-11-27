import React,{Component} from "react";
import axios from "axios";
class Card extends React.Component{

  constructor(props){
    super(props)

    this.state={
    data:[]
    }

  }
componentDidMount(){

    axios.get("https://pokeapi.co/api/v2/pokemon/gengar")
    .then(res=>{
        const data=res.data
        this.setState({data})


     })


}
















///render(){

//return(

  //  <div className="Card">
     //  <h1 className="Titulo"> {this.props.h1}</h1>
       //<h2 className="Name">{this.props.h2}</h2>
     //  <img  className="pkmimg" src={this.props.src}></img>

  //  </div>

//)

}


export default Card