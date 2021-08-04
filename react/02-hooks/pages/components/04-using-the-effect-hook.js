import React, { useEffect, useState } from 'react'

const EffectExample = () => {
  
  useEffect (()=>{
    document.title = "Hello";
  },[]) // ,[]) -> only do it at beginning
  // skip applying an effect if certain values haven’t changed between re-renders
  // second argument is an array of those values.  
  // [] - it doesnt depends on any values from props or state, so it never needs to re-run

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes
  

  return (
    <>
      <p>you clicked {count} times</p>
      <button onClick ={()=>{setCount(count +1)}}>Click me</button> 
    </>
  )
}

export default EffectExample