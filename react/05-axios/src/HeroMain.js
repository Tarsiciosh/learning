import { useState, useEffect } from 'react'
import axios from 'axios'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'

const myToken = '102141048846123'

const HeroMain = ({title}) => { 
  const [token] = useState(myToken)
  const [herosId] = useState(["644","620","70","263","298","259"])
  const [heros, setHeros] = useState([])

  useEffect(() => { 
    async function getHerosInfo () {   
      try {      
        var fetchedHeros = []
        for (var i = 0; i< herosId.length; i++){
          var response = await axios.get(
            `https://superheroapi.com/api/${token}/${herosId[i]}/`
          )
          fetchedHeros = [...fetchedHeros, response.data]
        }
        setHeros(fetchedHeros)
      } catch (error){
        console.error(error)
      }
    }
    getHerosInfo()   
  },[herosId,token])

  return (
    <div style={{margin:'3rem'}}> 
      <p className="display-5"> {title} </p>
        <HerosGrid heros={heros}/>
        <HerosPowerStats heros={heros}/> 
    </div>
  )
}

export default HeroMain