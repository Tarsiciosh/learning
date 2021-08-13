import Hero from './Hero'

const HerosGrid = ({ heros }) => {
  return (
    <div className = "container">
      <div className ="row">
        {heros.map(hero => (
          <div className ="col" key={hero.id}>
            <Hero hero={hero} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HerosGrid