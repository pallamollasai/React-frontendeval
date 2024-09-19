import React, { useState, useEffect } from "react";
import "./style.css";
let timer;
export default function ProgressBar({ percent = 20 }) {
  const [percent1, setPercent] = useState(0);
  useEffect(() => {
    timer = setInterval(() => {
      if (percent1 > 100) {
        clearInterval(timer);
        return;
      } else {
        setPercent((prevPercent) => prevPercent + 1);
      }
      console.log("incoming.....");
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: `${Math.min(percent1, 100)}%` }}
        ></div>
      </div>
    </>
  );
}
