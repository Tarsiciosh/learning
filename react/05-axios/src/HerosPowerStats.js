
const HerosPowerStats = ({token, heros}) => {

  const ps = heros.powerstats

  return (
    <>
      <p className="display-6"> Group PowerStats: </p>
      <ul className="list-group">
        <li className="list-group-item"> {`Inteligence: ${ps.intelligence}`} </li>
        <li className="list-group-item"> {`Strength: ${ps.strength}`}</li>
        <li className="list-group-item"> {`Speed: ${ps.speed}`}</li>
        <li className="list-group-item"> {`Durability: ${ps.durability}`}</li>
        <li className="list-group-item"> {`Power: ${ps.power}`}</li>
        <li className="list-group-item"> {`Combat: ${ps.combat}`}</li>  
      </ul>
    </>
  )
}

export default HerosPowerStats