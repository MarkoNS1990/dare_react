import React, { Component } from "react";
import CounterClass from "../counter-class/counterClass";

export default class SimpleCounterClass extends Component {
  // napraviti state koji se menja pritiskom na klik buttona

  state = {
    count: 0,
  };

  styleHandler = () => {
    const count = document.querySelector('.countClass');

    if(this.state.count < 0) {
      count.classList.add('red');
    }else {
      count.classList.remove('red');
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    }, ()=> {
      this.styleHandler();
    });
  };

  // 1. Nacin (workaround za tvoje resenje sa StrictMode)
  // decrementCount1 = () => {
  //   // kada prosledjujes callback u setState onda ti je trenutni state taj argument koji prosledis
  //   this.setState((currentState) => {
  //     console.log("state: ", currentState);
  //     if (this.state.count < 1) {
  //       return (this.state.count = 0);
  //     } else {
  //       // pravis novi objekat sa kopijom trenutnog state-a i menjas mu trenutni property count za -1
  //       return { ...this.state, count: currentState.count - 1 };
  //     }
  //   });
  // };

  // 2.Nacin
  decrementCount2 = () => {
    // jednostavniji nacin, setujes state posebno za svaki od slucajeva
    // if (this.state.count < 1) {
    //   this.setState({
    //     count: 0,
    //   });
    // } else {
    //    this.setState({
    //     count: this.state.count - 1,
    //   });
    // }

    this.setState({
      count: this.state.count - 1,
    }, ()=> {
      this.styleHandler();
    });


  };

  resetCount = () => {
    this.styleHandler();

    this.setState({
      count: 0,
    }, () => {
      this.styleHandler();
    });
  };

  render() {
    return (
      <div>
        <h3>Counter class-based</h3>
        <CounterClass 
        count={this.state.count}
        incrementCount={this.incrementCount}
        decrementCount2={this.decrementCount2} 
        resetCount={this.resetCount}
        />
      </div>
    );
  }
}
