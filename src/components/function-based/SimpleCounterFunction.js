import React, { useState } from "react";

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
      <p>{count}</p>
      <button onClick={incrementCount}>Add 1</button>
      <button onClick={decrementCount}>Substract 1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default SimpleCounterFunction;
