import React from "react";
export default function Child(props) {
  const incrementCounter = () => {
    props.incrementCountBy(+props.count);
  };
  return (
    <>
      <button onClick={incrementCounter}>Update Count</button>
    </>
  );
}
