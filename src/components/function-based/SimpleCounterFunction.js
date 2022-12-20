import React, { useState } from "react";

const SimpleCounterFunction = () => {
  // napraviti state koji se menja pritiskom na klik buttona preko useState hook-a
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h3>Counter function-based</h3>
      <p>{count}</p>
      <button onClick={incrementCount}>Add 1</button>
    </div>
  );
};

export default SimpleCounterFunction;
