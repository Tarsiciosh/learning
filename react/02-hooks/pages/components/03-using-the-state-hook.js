import React, { useState } from 'react'

export default function Counter (){
  const [count, setCount] = useState(0);

  function handleOnClick () {
    setCount(count+1);
  }

  return (
    <div>
      <p className ="lead"> you clicked {count} times</p>
      <button className ="btn btn-primary" onClick={ handleOnClick }> click </button>
    </div>
  )
}

/*
// another way for the same:
export default const Counter = () => {
  return (
    <p> hello </p>
  )
}*/