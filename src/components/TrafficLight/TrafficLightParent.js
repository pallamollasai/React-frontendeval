import React from "react";
import TrafficLight from "./TrafficLight";
let trafficLightObj = {
  red: {
    backgroundColor: "red",
    duration: 2000,
    next: "green",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 1000,
    next: "red",
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "yellow",
  },
};
// console.log(Object.keys(trafficLightObj));
export default function TrafficLightParent() {
  return (
    <>
      <span>Signal</span>
      <span>Signal 2</span>
      <TrafficLight trafficLightObj={trafficLightObj} />
    </>
  );
}
