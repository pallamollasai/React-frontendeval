import React, { useEffect, useState } from "react";
export default function CountDownHMS() {
  const [time, setTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalMilliSeconds, setTotalMilliSeconds] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  useEffect(() => {
    if (isTimerStarted) {
      setTimeout(() => {
        setTotalMilliSeconds(totalMilliSeconds - 1000);
      }, 1000);
    }
  }, [totalMilliSeconds, isTimerStarted]);

  const startTimer = () => {
    setIsTimerStarted(true);
    setTotalMilliSeconds((hours * 60 * 60 + minutes * 60 + seconds) * 1000);
  };

  const getFormattedTime = () => {
    const totalSeconds = parseInt(Math.floor(totalMilliSeconds / 1000));
    const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    const totalHours = parseInt(Math.floor(totalMinutes / 60));

    const seconds = parseInt(totalSeconds % 60);
    const minutes = parseInt(totalMinutes % 60);
    const hours = parseInt(totalHours % 24);

    return `${hours}: ${minutes}: ${seconds}`;
  };

  return (
    <>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
      />
      <p>
        Entered details are {hours} {minutes} {seconds}
      </p>
      <p>time is {getFormattedTime()} </p>
      <button onClick={startTimer}>Start Timer</button>
    </>
  );
}
