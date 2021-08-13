import { useState, useEffect } from 'react'
import axios from 'axios'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import Hero from './Hero'

const myToken = '102141048846123'

const HeroMain = ({title}) => { 
  const [token, setToken] = useState(myToken)
  const [herosId, setHerosId] = useState([63,720,708,107,155,618])
  const [heros, setHeros] = useState([])

  useEffect(() => {
    herosId.forEach(id => {
      async function fetchHeroInfo () {  
        try {      
          const response = await axios.get(
            `https://superheroapi.com/api/${token}/${id}/`
          )   
          setHeros([ ...heros, response.data])
        } catch (error){
          console.error(error)
        } 
      }
      fetchHeroInfo()
    });
  },[])

  return (
    <div style={{margin:'3rem'}}> 
      <p className="display-5"> {title} </p>
        <HerosGrid heros={heros}/> 
    </div>
  )
} 

export default HeroMain