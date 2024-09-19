import React, { useEffect, useState } from "react";
import "./style.css";
export default function Board() {
  const [matrix, setMatrix] = useState(Array(5).fill(Array(5).fill(0)));

  useEffect(() => {
    console.log("useefftct");
  }, []);

  return (
    <>
      <p>Helloo</p>
      <div className="container">
        {matrix.map((element, index) => (
          <React.Fragment key={index}>
            {element.map((e, index) => (
              <>
                <div className="box" key={index}></div>
              </>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
