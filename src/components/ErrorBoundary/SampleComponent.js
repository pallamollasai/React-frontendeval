import React, { useEffect } from "react";
export default function SampleComponent(props) {
  if (props.name === "JOKER") {
    throw new Error("error");
  }
  return (
    <>
      <h1>Sample COmponent</h1>
    </>
  );
}
