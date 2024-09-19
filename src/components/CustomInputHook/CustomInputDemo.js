import React from "react";
import { useCustomInputHook } from "./CustomInputHook";

export default function CustomInputDemo() {
  const { inputValue, inputValueChange } = useCustomInputHook();

  return (
    <>
      <input type="text" value={inputValue} onChange={inputValueChange} />
    </>
  );
}
