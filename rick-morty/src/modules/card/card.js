
const Card=({name,stat,species,image,origin,episodes,episode,episode2,episode3,episode4,episode5})=>{

    return(
    <>
    <div className="Card"> 
    
    <h1 className="name">{name}</h1>

    <img className="image" src={image} alt={image}/>
    
    <h2 className="status">{stat}</h2>
    
    <h2 className="species">{species} </h2>

    <h2 className="origin">{origin}</h2>

    <a className="episodes" href="#"><h2>Episodes</h2></a>

    <h2 className="episode">{episode}</h2>

    <h2 className="episode2">{episode2}</h2>

    <h2 className="episode3">{episode3}</h2>

    <h2 className="episode4">{episode4}</h2>

    <h2 className="episode5">{episode5}</h2>

     </div>
    
    </>
    )
    
    
    }
    
    export default Card