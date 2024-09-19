import React, {useState} from "react";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute(props) {
    let {component: Component, ...rest} = props; 

    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ?? '');
    // console.log("logged in is ", isLoggedIn);
    return (
        <Route
            {...rest}
            render={(props) => localStorage.getItem('isLoggedIn') ? (<Component {...props} />): (<Redirect to="/" />)}
        />
        
    )
}