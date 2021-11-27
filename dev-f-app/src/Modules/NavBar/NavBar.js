import React from "react";
import {Link} from "react-router-dom";

const NavBar =()=>{

return(

<nav className="navBar">

    <li className="Navhome"><Link to="/">Home</Link></li>

    <li className="Navcreate"><Link to="/create">Create</Link></li>

    <li className="Navread"><Link to="/read">Read</Link></li>

    <li className="Navupdate"><Link to="/update">Update</Link></li>

    <li className="Navdeleate"><Link to="/deleate">Deleate</Link></li>


</nav>

)

}

export default NavBar