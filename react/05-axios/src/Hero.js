import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const emptyHero = {
  name: '',
  image: {
    url: ''
  }
}

export const Hero = ( {token, id} ) => {
  const [hero, setHero] = useState(emptyHero)

  useEffect(() => {
    async function fetchHeroInfo () {
      console.log('trying to make the request...') 
      try {      
        const response = await axios.get(
          `https://superheroapi.com/api/${token}/${id}/`
        )
        setHero(response.data)
        console.log('Hero info:',response);
      } catch (error){
        console.error(error)
      }
    }
    fetchHeroInfo()
  },[id,token])

  function handleClick () {
  
  }

  //style={{widht: "18rem", height: "18rem"}}  

  return (
    <>
      <div className="card" style={{width: "18rem", margin:30}}>
        <img className="card-img-top" 
          src={hero.image.url} 
          alt="hero"  
        />
        <div className="card-body">
          <h5 className="card-title">
            {hero.name}
          </h5>
          <p className="card-text"> 
            This is the description of the hero
          </p>
          <div className="row justify-content-around">
            <div className="col-4">
              <a className="btn btn-primary" 
                href="/mongo"> 
                Details 
              </a>
            </div>
            <div className="col-4">
              <a className="btn btn-danger" 
                href="/mongo"> 
                Delete 
              </a>
            </div>
          </div> 
        </div>
      </div>
      {/*
      <div style={{padding: 30}}> 
        {<button className = "btn btn-primary" onClick={handleClick}> Test </button>}
      </div> */}
    </>
  )
}

export default Hero
