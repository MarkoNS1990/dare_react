import React from 'react'

import "./counterFun.css";

export const CounterFun = ({count, incrementCount, decrementCount, resetCount}) => {
  return (
    <div>
        <p className='countFun'>{count}</p>
        <button className='btn btn-add' onClick={incrementCount}>Add 1</button>
        <button className='btn btn-sub' onClick={decrementCount}>Substract 1</button>
        <button className='btn btn-res' onClick={resetCount}>Reset</button>
    </div>
  )
}
