import { useReducer } from "react"

const initialCount = 0

function init(initialCount) {
  return {count: initialCount}
}

// it lets you extract the logic for calculating the initial state outside the reducer. 
// this is also handy for resetting the state later in response to an action:

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

function Counter() {
                                                //initialArg  init
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  //the initial state will be set to init(initialArg)
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type:'reset', payload: initialCount})}>Reset</button> 
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'increment'})}>+</button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter/>
    </>
  )
}

export default App

/* FIRST SIMPLE APROACH

import { useReducer } from "react"

const initialState = {count: 0}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function Counter() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'increment'})}>+</button>
    </>
  )
}

function App() {
  return (
    <Counter/>
  )
}

export default App
*/