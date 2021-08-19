const Hero = ({ hero }) => {
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
            <li className="list-group-item" key="3"> {`Speed: ${ps.speed}`}</li>
            <li className="list-group-item" key="4"> {`Durability: ${ps.durability}`}</li>
            <li className="list-group-item" key="5"> {`Power: ${ps.power}`}</li>
            <li className="list-group-item" key="6"> {`Combat: ${ps.combat}`}</li>
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