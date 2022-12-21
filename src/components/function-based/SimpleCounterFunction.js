import React, { useState } from "react";
import { CounterFun } from "../counter-fun/counterFun";

const SimpleCounterFunction = () => {
  // napraviti state koji se menja pritiskom na klik buttona preko useState hook-a
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decrementCount () {
    if(count < 1) {
      setCount(0);
    }else {
      setCount(prevCount => prevCount - 1);
    }
  }

  function resetCount () {
    setCount(0);
  }

  return (
    <div>
      <h3>Counter function-based</h3>
      <CounterFun 
      count={count} 
      incrementCount={incrementCount} 
      decrementCount={decrementCount} 
      resetCount={resetCount} />
    </div>
  );
};

export default SimpleCounterFunction;
