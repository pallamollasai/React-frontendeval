import React from "react";
export default function Country({ countryName = "", capitals = [] }) {
  // console.log("capitals are ", capitals);
  return (
    <>
      <h3>{countryName}</h3>
      <span>--</span>
      {capitals.map((cap, index) => (
        <>
          <span key={index}>{cap}</span>
        </>
      ))}
      {/* {capitals.map(capital, index) => (
        <>
          <span key={index}>`${capital} `</span>
        </>
      )} */}
    </>
  );
}
