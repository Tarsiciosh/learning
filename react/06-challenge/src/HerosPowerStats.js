import { useState, useEffect } from "react";
import HeroPowerStat from "./HeroPowerStat";

const HerosPowerStats = ({heros}) => {

  const [ps, setPs] = useState ([])
  
  useEffect ( () => {
    let newPs = {
      intelligence: 0, 
      strength: 0, 
      speed : 0, 
      durability : 0, 
      power : 0, 
      combat : 0
    }

    heros.forEach(hero => {
      newPs.intelligence = newPs.intelligence + parseInt(hero.powerstats.intelligence)
      newPs.strength = newPs.strength + parseInt(hero.powerstats.strength)
      newPs.speed = newPs.speed + parseInt(hero.powerstats.speed)
      newPs.durability = newPs.durability + parseInt(hero.powerstats.durability)
      newPs.power = newPs.power + parseInt(hero.powerstats.power)
      newPs.combat = newPs.combat + parseInt(hero.powerstats.combat)
    })

    var statsArray = []
    for (const property in newPs){
      statsArray = [...statsArray,{
        stat: property,
        value: newPs[property]
      }]
    }
    statsArray.sort((a,b) => (b.value - a.value))
    setPs(statsArray)
  },[heros])

  return (
    <>
      <p className="display-6"> PowerStats grupales: </p>
      <ul className="list-group" style={{width: "20rem"}}>
        {ps.map(p => (
          <HeroPowerStat data={p} key={p.stat}/>
        ))}
      </ul>
    </>
  )
}

export default HerosPowerStats