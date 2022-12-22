import React, { useEffect, useState } from "react";
import { CounterFun } from "../counter-fun/counterFun";

const SimpleCounterFunction = () => {
  // napraviti state koji se menja pritiskom na klik buttona preko useState hook-a
  const [count, setCount] = useState(0);

  useEffect(() => {
    styleHandler();
  }, [count])

  const styleHandler = () => {
    const countParagraph = document.querySelector('.countFun');
    if(countParagraph.innerHTML < 0) {
      countParagraph.classList.add('red');
    }else {
      countParagraph.classList.remove('red');
    }
  }

  function incrementCount() {
    styleHandler();
    setCount(prevCount => prevCount + 1);
  }

  function decrementCount () {
    styleHandler();
    setCount(prevCount => prevCount - 1);
  }

  function resetCount () {
    styleHandler();
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
