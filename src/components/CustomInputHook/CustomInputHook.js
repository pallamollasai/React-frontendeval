import React, { useState } from "react";
export const useCustomInputHook = () => {
  const [inputValue, setInputValue] = useState("");
  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };
  return {
    inputValue,
    inputValueChange
  };
};
