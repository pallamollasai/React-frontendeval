import React, { useState, createContext } from "react";
import ToggleThemeParent from "./ToggleThemeParent";
export const ToggleThemeContext = createContext({});

export default function ToggleContext() {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <ToggleThemeContext.Provider value={{ toggle, toggleTheme }}>
        <ToggleThemeParent />
      </ToggleThemeContext.Provider>
    </>
  );
}
