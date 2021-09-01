const Hero = ({ hero, herosId, setHerosId }) => {
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
            <li className="list-group-item" key="1"> {`Inteligencia: ${ps.intelligence}`} </li>
            <li className="list-group-item" key="2"> {`Fuerza: ${ps.strength}`}</li>
            <li className="list-group-item" key="3"> {`Velocidad: ${ps.speed}`}</li>
            <li className="list-group-item" key="4"> {`Durabilidad: ${ps.durability}`}</li>
            <li className="list-group-item" key="5"> {`Potencia: ${ps.power}`}</li>
            <li className="list-group-item" key="6"> {`Combate: ${ps.combat}`}</li>
          </ul>
          <br/>
          <div className="row justify-content-around">
            <div className="col-4">
              <a className="btn btn-primary" 
                href="/mongo"> 
                Detalles 
              </a>
            </div>
            <div className="col-4">
              <button className="btn btn-danger" 
                onClick={()=>{
                  console.log("herosId:", herosId)
                  console.log("heroID", hero.id)
                  console.log("hero position", herosId.indexOf(hero.id))         
                  const newHerosId = herosId
                  newHerosId.splice(newHerosId.indexOf(hero.id),1)
                  console.log("new heros ID:", newHerosId)
                  setHerosId(newHerosId)
                }}> 
                Borrar 
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Hero