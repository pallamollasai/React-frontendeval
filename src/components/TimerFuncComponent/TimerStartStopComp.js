import { useState, useRef } from "react";
export default function TimerStartStopComp() {
  const [count, setCount] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const timerRef = useRef(null);
  const [countLimit, setCountLimit] = useState(0);

  const startTimer = () => {
    setIsTimerStarted(true);
    timerRef.current = setInterval(() => {
      console.log(
        "limit & count is ",
        countLimit,
        count,
        typeof countLimit,
        typeof count
      );
      if (count > countLimit) {
        clearInterval(timerRef.current);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);
  };

  const stopTimer = () => {
    setIsTimerStarted(false);
    clearInterval(timerRef.current);
  };
  return (
    <>
      <div className="flex justify-center">
        <input
          type="number"
          id="seconds-input"
          value={countLimit}
          onChange={(e) => setCountLimit(Number(e.target.value))}
        />
        <div id="timer">{count}</div>
        <div>
          <button id="start" onClick={startTimer} disabled={isTimerStarted}>
            start
          </button>
          <button id="stop" onClick={stopTimer} disabled={!isTimerStarted}>
            stop
          </button>
        </div>
      </div>
    </>
  );
}
