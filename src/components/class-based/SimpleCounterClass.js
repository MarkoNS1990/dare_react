import React, { Component } from "react";

export default class SimpleCounterClass extends Component {
  // napraviti state koji se menja pritiskom na klik buttona

  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // 1. Nacin (workaround za tvoje resenje sa StrictMode)
  decrementCount1 = () => {
    // kada prosledjujes callback u setState onda ti je trenutni state taj argument koji prosledis
    this.setState((currentState) => {
      console.log("state: ", currentState);
      if (this.state.count < 1) {
        return (this.state.count = 0);
      } else {
        // pravis novi objekat sa kopijom trenutnog state-a i menjas mu trenutni property count za -1
        return { ...this.state, count: currentState.count - 1 };
      }
    });
  };

  // 2.Nacin
  decrementCount2 = () => {
    // jednostavniji nacin, setujes state posebno za svaki od slucajeva
    if (this.state.count < 1) {
      this.setState({
        count: 0,
      });
    } else {
       this.setState({
        count: this.state.count - 1,
      });
    }
  };

  //  3. Nacin - React.Strict mode izaziva dupli render na promenu state-a, samo skloni wrapper iz index.js da ti ne bude strict mode i radice ti tvoj nacin
  decrementCount3 = () => {
    this.setState(() => {
      if (this.state.count < 1) {
        return (this.state.count = 0);
      } else {
        return (this.state.count = this.state.count - 1);
      }
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h3>Counter class-based</h3>

        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Add 1</button>
        <button onClick={this.decrementCount1}>Substract 1(prvi nacin)</button>
        <button onClick={this.decrementCount2}>Substract 1(drugi nacin)</button>
        <button onClick={this.decrementCount3}>Substract 1(treci nacin)</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
