import { useState, useEffect } from "react";

const HerosPowerStats = ({heros}) => {

  const [ps, setPs] = useState (
    {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0
    }
  )
  
  useEffect ( () => {
    var intelligence = 0, strength = 0, speed = 0, durability = 0, power= 0, combat= 0
    heros.forEach(hero => {
      intelligence = intelligence + parseInt(hero.powerstats.intelligence)
      strength = strength + parseInt(hero.powerstats.strength)
      speed = speed + parseInt(hero.powerstats.speed)
      durability = durability + parseInt(hero.powerstats.durability)
      power = power + parseInt(hero.powerstats.power)
      combat = combat + parseInt(hero.powerstats.combat)
    })
    setPs({
      intelligence: intelligence,
      strength: strength,
      speed: speed,
      durability: durability,
      power: power,
      combat: combat
    })
  },[heros])

  return (
    <>
      <p className="display-6"> Group PowerStats: </p>
      <ul className="list-group">
        <li className="list-group-item"> {`Inteligence: ${ps.intelligence.toString()}`} </li>
        <li className="list-group-item"> {`Strength: ${ps.strength.toString()}`}</li>
        <li className="list-group-item"> {`Speed: ${ps.speed.toString()}`}</li>
        <li className="list-group-item"> {`Durability: ${ps.durability.toString()}`}</li>
        <li className="list-group-item"> {`Power: ${ps.power.toString()}`}</li>
        <li className="list-group-item"> {`Combat: ${ps.combat.toString()}`}</li>  
      </ul>
    </>
  )
}

export default HerosPowerStats