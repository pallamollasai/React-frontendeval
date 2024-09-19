import React from "react";
import { UserDetails } from "./GrandParent";
export default function Child() {
  const userDetails = UserDetails();
  return (
    <>
      <p>{userDetails.userName}</p>
    </>
  );
}
