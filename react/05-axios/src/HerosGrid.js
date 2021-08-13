import Hero from './Hero'

const HerosGrid = ({ heros }) => {

  console.log("Herogrid",heros)
  
  return (
    <div className = "container">
      <div className ="row">
        {heros.map(hero => (
          <div className ="col">
            <Hero hero={hero} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HerosGrid




