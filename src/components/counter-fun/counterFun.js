import React from 'react'

import "./counterFun.css";

export const CounterFun = ({count, incrementCount, decrementCount, resetCount}) => {
  return (
    <div>
        <p className='countFun'>{count}</p>
        <button onClick={incrementCount}>Add 1</button>
        <button onClick={decrementCount}>Substract 1</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}
