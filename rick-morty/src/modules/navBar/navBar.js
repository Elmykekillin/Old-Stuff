import React,{useState} from "react";
import {BrowserRouter as Router,useHistory} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const NavBar=()=>{
    const history=useHistory()

const handleButton=()=>{
let search=document.getElementById("search")
console.log(search.value)
history.push("./profile.js")

}



  return(
      <div className="navBar">

    <a className="home" href="../app.js"><img alt="home" className="home" src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"></img></a>      
    <img className="logo" alt="Rick and Morty Logo" src="https://www.firstcomicsnews.com/wp-content/uploads/2017/09/Rick-and-Morty-logo-600x257.png"></img>

    <input type="text" className="search" id="search"></input>
    <button type="button" className="searchBtn" onClick={handleButton}>Search</button>

    </div>
  )  



}


export default NavBar