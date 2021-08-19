
const HeroPoweStat = ( {data} ) => {
  return(
    <li className="list-group-item"> 
      
      {`${data.stat}: ${data.value.toString()}`} 
    
    </li>
  )
}

export default HeroPoweStat