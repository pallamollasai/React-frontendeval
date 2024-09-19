import React from "react";
import "./style.css";
export default function BoardBox() {
  return (
    <>
      <div className="wrapper">
        {[...Array(5)].map((_, ind) => (
          <>
            <div class="row">
              {[...Array(5)].map((i, index2) => (
                <>
                  <div class="flex-box"></div>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
