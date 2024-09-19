import React, { useState, useRef } from "react";
export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const timeRef = useRef(null);

  const handleStartTime = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    timeRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };

  const stopStartTime = () => {
    clearInterval(timeRef.current);
  };

  let timeDiff = (currentTime - startTime) / 1000;
  return (
    <>
      <span> stopwatch is: {timeDiff.toFixed(3)}</span>
      <button onClick={handleStartTime}>start</button>
      <button onClick={stopStartTime}>stop</button>
    </>
  );
}
