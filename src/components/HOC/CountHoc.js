import React from "react";
import { HocWrapper } from "./HocWrapper";
function CountHoc(props) {
  return (
    <>
      <p>count is {props.count}</p>
      <button onClick={props.incrementCount}>
        increment Count {props.test}
      </button>
    </>
  );
}
export default HocWrapper(CountHoc);
