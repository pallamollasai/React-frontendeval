import React from "react";
import {BrowserRouter as Router, Switch, Route, path, exact} from "react-router-dom";
import Landingpage from "./Landingpage";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import PrivateRoute from "./PrivateRoute";


export default function Mainpage() {
    return (
        <>
            <Router>
                <Landingpage />
                <Switch>
                    <Route path="/" exact component={Loginpage} />
                    <PrivateRoute path="/home" exact component={Homepage} />
                </Switch>
            </Router>
        </>
    )
}