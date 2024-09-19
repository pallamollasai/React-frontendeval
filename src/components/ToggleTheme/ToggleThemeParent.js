import React, { useContext } from "react";
import { ToggleThemeContext } from "./ToggleContext";
import "./style.css";

export default function ToggleThemeParent() {
  const { toggle, toggleTheme } = useContext(ToggleThemeContext);
  return (
    <>
      <div className={`toggle-theme-container  ${toggle ? "dark" : "white"} `}>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </>
  );
}

// YOU CAN USE STYLES LIKE THESE
//.theme-light .header {
  // background: #fff;
// }.theme-dark .header {
//    background: #36394c;
// }


{/* <div className={`theme-${theme}`}>
    <Layout>
       // Your code here
    </Layout>
  </div> */}