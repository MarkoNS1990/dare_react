import React from 'react'
import SimpleCounterClass from '../class-based/SimpleCounterClass'
import SimpleCounterFunction from '../function-based/SimpleCounterFunction'
import './counterWrapper.css'
export const CounterWrapper = () => {
  return (
    <div className='counter-container'>
        <SimpleCounterClass/>
        <SimpleCounterFunction/>
    </div>
  )
}
