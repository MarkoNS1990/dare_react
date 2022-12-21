import React from 'react'

export const CounterFun = ({count, incrementCount, decrementCount, resetCount}) => {
  return (
    <div>
        <p>{count}</p>
        <button onClick={incrementCount}>Add 1</button>
        <button onClick={decrementCount}>Substract 1</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}
