import React, { useState } from "react";

export default function CounterIncFun() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button onClick={incrementCounter}>Increment</button>
      <span>{count}</span>
      <button onClick={decrementCounter} disabled={count < 1}>
        Decrement
      </button>
    </>
  );
}
