import{useState} from "react"
import axios from "axios"
import Pokemon from "../Pokemon/pokemon"

const PokemonView=()=>{
const URL_BASE="https://pokeapi.co/api/v2/pokemon/"
const[data,setData]=useState({})
const[numberPokemon,setNumberPokemon]=useState(1)
const [search, setSearch] = useState("")

const getPokemon= async()=>{
    try{
     const response=await axios.get(`${URL_BASE}${numberPokemon}`)
     setData(response.data)

    }
   
     catch(err){console.log(err)}

}

const handleClickA = () => {
    setNumberPokemon(numberPokemon + 1)
    getPokemon()
}

const handleClickB = () => {
    setNumberPokemon(numberPokemon -1)
    getPokemon()
}


const handleClickC=()=>{
    setNumberPokemon(Math.floor(Math.random() * 800))
    getPokemon()
}

const handleSearch=()=>{
    alert(search)
}

return(
    <>
    <h1 className="title">Quien es ese Pokemon?</h1>
    <Pokemon name={data.name} id={data.id}  pkmSprite={data.sprites?.front_default} />
    <input type="text" className="busqueda" placeholder="Buscar Pokemon" onChange={setSearch(target.value),handleSearch()}></input>
    <button className="botonA botones" onClick={handleClickA}>Next Pokemon</button>
    <button className="botonC botones" onClick={handleClickC}>Random Pokemon</button>
    <button className="botonB botones" onClick={handleClickB}>Last Pokemon</button>
    </>
)
}
export default PokemonView