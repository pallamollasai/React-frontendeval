import React from "react";
import withHoc from "./withHoc";
function CounterHoc(props) {
    return (
        <>
            <p>count is {props.count}</p>
            <p>test props is {props.test}</p>
            <button onClick={props.incrementCount}>IncrementCount</button>
        </>
    )
}
export default withHoc(CounterHoc);
// export default CounterHoc;