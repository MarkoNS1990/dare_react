import React, { Component } from "react";


export default class SimpleCounterClass extends Component {
  // napraviti state koji se menja pritiskom na klik buttona 
  render() {
    return (
      <div>
        <h3>Counter class-based</h3>

        <p>0</p>
        <button>Add 1</button>
      </div>
    );
  }
}
