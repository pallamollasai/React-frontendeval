import { React, useEffect, useState } from "react";

export default function StackoverflowPlayer() {
  const [playerTeam, setPlayerTeam] = useState({});
  const [movement, setMovement] = useState({ active: false, character: null });

  useEffect(() => {
    console.log("movement is ", movement);
    //handleClick();
  }, [playerTeam, movement]);

  function handleClick() {
    console.log("movement inside handle click is ", movement);
    if (movement.active) {
      console.log("movement is active");
    } else {
      const enterMovement = {
        active: true,
        character: "something"
      };
      setMovement(enterMovement);
    }
  }

  return (
    <>
      <h1>Stackoverflow Example</h1>
      <button onClick={() => handleClick()}>Change</button>
    </>
  );
}
