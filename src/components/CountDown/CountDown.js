import React, { useEffect, useState } from "react";
let timer;
export default function CountDown() {
  const [count, setCount] = useState(30);

  useEffect(() => {
    timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>Count is {count}</p>
    </>
  );
}
