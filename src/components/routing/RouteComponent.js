import React from "react";
import { Switch, Route } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

const Test2Component = lazy(() => import("./Test2Component"));
const TestComponent = lazy(() => import("./TestComponent"));

export default function RouteComponent() {
  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <Route
            path="/route/test/:id"
            exact
            sensitive
            component={TestComponent}
            strict
          ></Route>
          <Route
            path="/route/test2"
            exact
            sensitive
            component={Test2Component}
            strict
          ></Route>
          <Route path="*" render={() => <h3>NOT FOUND</h3>}></Route>
        </Switch>
        <Link to="/route/test2">Go TO route</Link>
        <NavLink
          to="/route/test/2"
          activeClassName=""
          activeStyle={{ color: "red" }}
        >
          Go TO route 1
        </NavLink>
      </Suspense>
    </>
  );
}
