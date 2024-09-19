import React, { useEffect, useState, useRef } from "react";
import "./style.css";
export default function TrafficLight({ trafficLightObj }) {
  const [currentColor, setCurrentColor] = useState(
    trafficLightObj["red"].backgroundColor
  );
  const timerRef = useRef();

  console.log("outside useeffect");
  useEffect(() => {
    console.log("inside useeffect");
    timerRef.current = setTimeout(() => {
      setCurrentColor(trafficLightObj[currentColor]?.next);
    }, trafficLightObj[currentColor]?.duration);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentColor]);
  return (
    <>
      {console.log("inside render")}
      <div className="traffic-light-wrapper">
        {/* {trafficLightObj["red"]} */}
        {Object.keys(trafficLightObj).map((color, index) => (
          <div
            key={index}
            className="traffic-light"
            style={{
              backgroundColor:
                currentColor === color
                  ? trafficLightObj[color].backgroundColor
                  : "grey"
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
