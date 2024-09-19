import React, { useState, useRef, useEffect } from "react";
export default function TimerFunComp() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    if (hours === 1) {
      clearInterval(timerRef.current);
    }
  }, [hours]);

  useEffect(() => {
    if (minutes === 1) {
      setHours((prevHours) => prevHours + 1);
    }
  }, [minutes]);

  useEffect(() => {
    if (seconds === 10) {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [seconds]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 10) {
          prevSeconds = 0;
        } else {
          prevSeconds = prevSeconds + 1;
        }
        return prevSeconds;
        // return (prevSeconds = prevSeconds + 1);
      });
    }, 1000);

    return () => {
      clearInterval(timerRef);
    };
  }, []);
  return (
    <>
      <span>timer is </span>
      <span>
        {hours}: {minutes} : {seconds}
      </span>
    </>
  );
}
