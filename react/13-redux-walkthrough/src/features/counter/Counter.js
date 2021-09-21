import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        arial-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={()=> dispatch(increment())}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter