import React, { Component } from 'react'

import "./counterClass.css";

export default class CounterClass extends Component {
  render() {
    const {count, incrementCount, decrementCount2, resetCount} = this.props;
    return (
      <div>       
        <p className='countClass'>{count}</p>
        <button className='btn btn-add' onClick={incrementCount}>Add 1</button>
        <button className='btn btn-sub' onClick={decrementCount2}>Substract 1(drugi nacin)</button>
        <button className='btn btn-res' onClick={resetCount}>Reset</button>
      </div>
    )
  }
}
