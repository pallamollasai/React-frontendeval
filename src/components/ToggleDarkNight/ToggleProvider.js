import React, {createContext, useContext, useState, useEffect} from "react";
import ToggleChildren from "./ToggleChildren";
export const ToggleThemeContext = createContext(null);
export function getCurrentTheme() {
    return useContext(ToggleThemeContext);
}

export default function ToggleProvider() {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        console.log("incoming here...");
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light'? 'white' : 'black';
    }, [theme])

    return (
        <>
            <h2>Theme Light</h2>
            <ToggleThemeContext.Provider value={{theme, handleTheme}}>
                <ToggleChildren />
            </ToggleThemeContext.Provider>
        </>
    )


}