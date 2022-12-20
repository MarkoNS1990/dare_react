import React, { Component } from "react";


export default class SimpleCounterClass extends Component {
  // napraviti state koji se menja pritiskom na klik buttona 

  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h3>Counter class-based</h3>

        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Add 1</button>
      </div>
    );
  }
}
