import React from "react";

const SimpleCounterFunction = () => {
  // napraviti state koji se menja pritiskom na klik buttona preko useState hook-a
  return (
    <div>
      <h3>Counter function-based</h3>
      <p>0</p>
      <button>Add 1</button>
    </div>
  );
};

export default SimpleCounterFunction;
