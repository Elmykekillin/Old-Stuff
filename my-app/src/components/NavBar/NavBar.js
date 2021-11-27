import React, {Component} from "react"
import Links from "../Links/Links"
class NavBar extends Component{

render(){
    return(

        <div className="NavBody">

        <Links href="./"  text="Inicio"/>
        <Links href="./" text="Menu" />
        <Links href="./" text="Salida" />

        </div>

    )
}

}

export default NavBar