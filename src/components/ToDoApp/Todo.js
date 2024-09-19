import React, { useEffect, useState } from "react";
import "./style.css";

export default function Todo() {
  const [todoTasks, setTodoTasks] = useState([
    "learn react",
    "learn JS",
    "learnCSS"
  ]);
  const [inprogressTasks, setInprogressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const moveToInprogress = (value, type) => {
    // const { value } = event.target;
    console.log("value is ", value);
    if (type === "INPROGRESS") {
      setInprogressTasks([...inprogressTasks, value]);
    } else if (type === "COMPLETED") {
      setInprogressTasks(inprogressTasks.filter((todo, ind) => todo !== value));
      setCompletedTasks([...completedTasks, value]);
    }
    setTodoTasks(todoTasks.filter((todo, ind) => todo !== value));

    console.log("todos are ", todoTasks);
  };

  return (
    <>
      <div className="container">
        <div>
          <h6>Todos</h6>
          <ul>
            {todoTasks.map((task, index) => (
              <li
                key={index}
                onClick={(event) =>
                  moveToInprogress(event.target.textContent, "INPROGRESS")
                }
              >
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6>INPROGRESS</h6>
          <ul>
            {inprogressTasks.map((task, index) => (
              <li
                key={index}
                onClick={(event) =>
                  moveToInprogress(event.target.textContent, "COMPLETED")
                }
              >
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6>COMPLETED</h6>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
