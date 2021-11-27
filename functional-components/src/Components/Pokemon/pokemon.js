
const Pokemon=({name,id,pkmSprite})=>{

return(
<>
<div className="pokemonCard"> 

<h1 className="name">{name}</h1>

<h2 className="number">{id}</h2>

 {pkmSprite && <img className="pokemonSprite" src={pkmSprite} alt={pkmSprite}/>} 
 
 </div>

</>
)


}

export default Pokemon