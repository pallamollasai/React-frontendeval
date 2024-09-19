import { useState, useEffect, useRef } from "react";
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export default function SimpleClock() {
  const [date, setDate] = useState(new Date());
  //console.log('day is ', date.getDay());
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <>
      <div id="#day">Day: {`"${weekDays[date.getDay()]}"`}</div>
      <div id="#date">
        Date:{" "}
        {`"${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}"`}
      </div>
      <div id="#time">
        Time: {`"${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}"`}
      </div>
    </>
  );
}
