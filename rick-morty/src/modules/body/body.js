import React, { useState } from "react"
import axios from "axios"
import Card from "../card/card"
import { useEffect } from "react"

const Index=() =>{

    const URL_BASE="https://rickandmortyapi.com/api/character/"
    const[data,setData]=useState([]) 
  const get= async()=>{
      try{
       const response =await axios.get(`${URL_BASE}`)
       setData(response.data.results)

      }

      catch(err){
          {console.log(err)}
      }

  }
  useEffect(()=>{
      get()
  },[])

  useEffect(()=>{
      setData(data)
  },[data])
  console.log(data[0])



return(
<>
<Card
                name={data[0]?.name}
                image={data[0]?.image}
                stat={data[0]?.status}
                species={data[0]?.species}
                origin={data[0]?.origin.name}
                episode={data[0]?.episode[0]}
                episode2={data[0]?.episode[1]}
                episode3={data[0]?.episode[2]}
                episode4={data[0]?.episode[3]}
                episode5={data[0]?.episode[4]}
                />

<Card
                name={data[1]?.name}
                image={data[1]?.image}
                stat={data[1]?.status}
                species={data[1]?.species}
                origin={data[1]?.origin.name}
                episode={data[1]?.episode[0]}
                episode2={data[1]?.episode[1]}
                episode3={data[1]?.episode[2]}
                episode4={data[1]?.episode[3]}
                episode5={data[1]?.episode[4]}
                />

<Card
                name={data[2]?.name}
                image={data[2]?.image}
                stat={data[2]?.status}
                species={data[2]?.species}
                origin={data[2]?.origin.name}
                episode={data[2]?.episode[0]}
                episode2={data[2]?.episode[1]}
                episode3={data[2]?.episode[2]}
                episode4={data[2]?.episode[3]}
                episode5={data[2]?.episode[4]}
                />

<Card
                name={data[3]?.name}
                image={data[3]?.image}
                stat={data[3]?.status}
                species={data[3]?.species}
                origin={data[3]?.origin.name}
                episode={data[3]?.episode[0]}
                episode2={data[3]?.episode[1]}
                episode3={data[3]?.episode[2]}
                episode4={data[3]?.episode[3]}
                episode5={data[3]?.episode[4]}
                />

<Card
                name={data[4]?.name}
                image={data[4]?.image}
                stat={data[4]?.status}
                species={data[4]?.species}
                origin={data[4]?.origin.name}
                episode={data[4]?.episode[0]}
                episode2={data[4]?.episode[1]}
                episode3={data[4]?.episode[2]}
                episode4={data[4]?.episode[3]}
                episode5={data[4]?.episode[4]}
                />

<Card
                name={data[5]?.name}
                image={data[5]?.image}
                stat={data[5]?.status}
                species={data[5]?.species}
                origin={data[5]?.origin.name}
                episode={data[5]?.episode[0]}
                episode2={data[5]?.episode[1]}
                episode3={data[5]?.episode[2]}
                episode4={data[5]?.episode[3]}
                episode5={data[5]?.episode[4]}
                />
</>



)
}
export default  Index