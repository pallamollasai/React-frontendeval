import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
export default function Test2Component() {
  const location = useLocation();
  const search_query = new URLSearchParams(location.search);
  const match = useRouteMatch("/route/test3");

  return (
    <>
      {match ? (
        <>
          <p>queryParam {search_query.get("test1")}</p>
          <p>asdfafd</p>
        </>
      ) : (
        `<h2>Not FOund</h2>`
      )}
    </>
  );
}
