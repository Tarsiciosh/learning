
const HeroPreview = ({ hero }) => {
  return (
    <>
      <div className="card" style={{width: "10rem", margin:10}}>
        <img className="card-img-top" 
          src={hero.image.url} 
          alt="hero"  
        />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <br/>        
          <a className="btn btn-primary" 
            href="/mongo"> 
            Add 
          </a>   
        </div>
      </div>
    </>
  )
}

export default HeroPreview