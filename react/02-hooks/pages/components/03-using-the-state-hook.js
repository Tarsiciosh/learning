import React, { useState } from 'react'

export default function Counter (){
  const [count, setCount] = useState(0);

  function handleOnClick () {
    setCount(count+1);
  }

  return (
    <div>
      <p> you clicked {count} times</p>
      <button onClick={ handleOnClick }> click </button>
    </div>
  )
}

/*
const Counter = () => {
  return (
    <p> hello </p>
  )
}*/