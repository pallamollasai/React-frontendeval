import React from "react";
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  Prompt
} from "react-router-dom";
// import { Prompt } from "react-router";

export default function TestComponent() {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <Prompt when={true} message="Are you sure you want to get back"></Prompt>
      <p>Tests {location.pathname}</p>
      <button onClick={() => history.push("/all")}>ClickHere</button>
    </>
  );
}
