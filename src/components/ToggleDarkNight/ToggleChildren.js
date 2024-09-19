import { ToggleThemeContext, getCurrentTheme } from "./ToggleProvider";
import React, {useEffect} from "react";

export default function ToggleChildren() {
    console.log("values are ", getCurrentTheme());
    const { theme, handleTheme} = getCurrentTheme();
    return (
        <button onClick={() => handleTheme()}>{theme}</button>
    )
}