import { useState, useEffect } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    incrementCount();
  }, [count]);

  return {
    count,
    incrementCount
  };
};

// var promise = function (number) {
//   return new Promise((resolve, reject) => {
//     if (number < 4) reject("error");
//     else resolve("success");
//   });
// };

// console.log(promise(4).then((res) => console.log(res)));
