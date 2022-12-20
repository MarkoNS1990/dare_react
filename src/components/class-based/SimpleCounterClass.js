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

  decrementCount = () => {
    this.setState( () => {

      if(this.state.count < 1) {
       return this.state.count = 0;
      } else {
       return this.state.count = this.state.count - 1;
      }
    }
    )
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Counter class-based</h3>

        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Add 1</button>
        <button onClick={this.decrementCount}>Substract 1</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
