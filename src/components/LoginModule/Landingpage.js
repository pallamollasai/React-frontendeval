import React from "react";
import "./styles.css";
import {BrowserRouter as Router, Switch, Route, path, NavLink} from "react-router-dom";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";

export default function Landingpage() {
    return (
        <>
            <nav className="menu-list">
                <ul>
                    <NavLink className="link" to="/">LOGO</NavLink>
                    <NavLink className="link" to="/home">HOME</NavLink>
                    <NavLink className="link" to="/task">TASK</NavLink>
                    <NavLink className="link" to="/user">USER</NavLink>
                </ul>
            </nav>

        </>
    )
}