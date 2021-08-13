import { useState, useEffect } from 'react'
import HerosGrid from './HerosGrid'
import HerosPowerStats from './HerosPowerStats'
import axios from 'axios'

const myToken = '102141048846123'

const emptyHeros = [{
  name: '',
  image: {
    url: ''
  },
  powerstats: {
    'intelligence': '',
    'strength': '',
    'speed': '',
    'durability': '',
    'power': '',
    'combat': ''
  },
}]

const HeroMain = ({title}) => { 
  const [token, setToken] = useState(myToken)
  const [herosId, setHerosId] = useState([63,720,708,107,155,618])
  const [heros, setHeros] = useState(emptyHeros)

  const id = 720

  useEffect(() => {
    
    async function fetchHeroInfo () {
      
      /*
      herosId.forEach(id => {
        console.log(id)
      });
      */
      
      try {      
        const response = await axios.get(
          `https://superheroapi.com/api/${token}/${id}/`
        )
        
        const newHeros = [response]
        setHeros(newHeros)
        console.log('Hero info:',response);
        console.log(heros)
      } catch (error){
        console.error(error)
      } 
 
    }

    fetchHeroInfo()
  },[])


  return (
    <div style={{margin:'3rem'}}> 
      <p className="display-5"> {title} </p>
        <HerosGrid heros={heros}/> 
    </div>
  )
} 

export default HeroMain


// <HerosGrid heros={heros}/> 