import React from 'react'
import Hero from './Hero';

const tk = '102141048846123';

const App = () => {
  return (
    <>
      <div style={{margin:'3rem'}}>
        <h1 className="display-3"> Welcome to heros page </h1>
        <h1 className="display-6"> These are your heros: </h1>
        <div className = "container">
          <div className ="row">
            <div className ="col">
              <Hero token={tk} id={"620"} />
            </div>
            <div className ="col">
              <Hero token={tk} id={"644"} />
            </div>
            <div className ="col">
              <Hero token={tk} id={"70"} />
            </div>
            <div className ="col">
              <Hero token={tk} id={"263"} />
            </div>
            <div className ="col">
              <Hero token={tk} id={"298"} />
            </div>
            <div className ="col">
              <Hero token={tk} id={"659"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
