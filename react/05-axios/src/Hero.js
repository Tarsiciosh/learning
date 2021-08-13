import React from 'react'
/*
const emptyHero = {
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
}
*/

const Hero = ( {hero} ) => {
  //const [hero, setHero] = useState(emptyHero)
  /*
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
  */

  const ps = hero.powerstats

  return (
    <>
      <div className="card" style={{width: "18rem", margin:30}}>
        <img className="card-img-top" 
          src={hero.image.url} 
          alt="hero"  
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <ul className="list-group">
            <li className="list-group-item" key="1"> {`Inteligence: ${ps.intelligence}`} </li>
            <li className="list-group-item" key="2"> {`Strength: ${ps.strength}`}</li>
            <li className="list-group-item"> {`Speed: ${ps.speed}`}</li>
            <li className="list-group-item"> {`Durability: ${ps.durability}`}</li>
            <li className="list-group-item"> {`Power: ${ps.power}`}</li>
            <li className="list-group-item"> {`Combat: ${ps.combat}`}</li>
          </ul>
          <br/>
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
    </>
  )
}

export default Hero
