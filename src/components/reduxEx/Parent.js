import React from "react";
import { Provider } from "react-redux";
import Store from "../../store/store";
import Child from "./Child";

export default function Parent() {
  return (
    <>
      <Provider store={Store}>
        <Child />
      </Provider>
    </>
  );
}
