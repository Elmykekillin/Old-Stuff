import React from "react";

const List=({name,last_name,nacionalidad,is_alive,gender,biography,id})=>{
return(

<>
<div className="list">
<h1>Name : {name}</h1>
<h1>Last Name : {last_name}</h1>
<h1>Nationality :  {nacionalidad}</h1>
<h1>Gender : {gender}</h1>
<h1>Biography : {biography}</h1>
<h1>Is alive? : {is_alive}</h1>
<h1>Id : {id}</h1>
</div>
</>

)
}

export default List