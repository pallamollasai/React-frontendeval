import React from "react";
import useFetch from "./fetchCustomHook";
const URL = "https://jsonplaceholder.typicode.com/users";
export default function FetchDataExample() {
  const { data, loading, error } = useFetch(URL);
  console.log("data inside ", data);
  return (
    <>
      {loading && <p>{loading}</p>}
      {data && (
        <ul>
          {data.map((user, index) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
}
