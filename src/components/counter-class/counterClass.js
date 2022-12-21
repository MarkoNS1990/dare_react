import React, { Component } from 'react'

export default class CounterClass extends Component {
  render() {
    const {count, incrementCount, decrementCount2, resetCount} = this.props;
    return (
      <div>       
        <p>{count}</p>
        <button onClick={incrementCount}>Add 1</button>
        {/* <button onClick={this.decrementCount1}>Substract 1(prvi nacin)</button> */}
        <button onClick={decrementCount2}>Substract 1(drugi nacin)</button>
        {/* <button onClick={this.decrementCount3}>Substract 1(treci nacin)</button> */}
        <button onClick={resetCount}>Reset</button>
      </div>
    )
  }
}
