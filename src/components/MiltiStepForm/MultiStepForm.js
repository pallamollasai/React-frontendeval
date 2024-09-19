import React, { useEffect, useState } from "react";
import "./Style.css";

const arrow = "<";
const formArray = [
  {
    type: "text",
    name: "Name",
    required: true
  },
  {
    type: "email",
    name: "Email",
    required: true
  },
  {
    type: "date",
    name: "Date Of Birth",
    required: true
  },
  {
    type: "password",
    name: "Password",
    required: true
  }
];
export default function MultiStepForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultArr, setResultArr] = useState(Array(4).fill(""));
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    console.log("Helo world....");
  });
  const onInputChange = (e) => {
    setResultArr((resultArr) => {
      const newArr = [...resultArr];
      newArr[currentIndex] = e.target.value;
      return newArr;
    });
  };
  return (
    <>
      <div className="container">
        {currentIndex !== 0 ? (
          <div className="goto-back">
            <span>{arrow}</span>
            <span
              className="goto-back-link"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              Back
            </span>
          </div>
        ) : (
          ``
        )}
        {!isRegistered ? (
          <>
            <div className="form-container">
              <div className="input-name">
                <label name={formArray[currentIndex].name}>
                  {formArray[currentIndex].name}
                </label>
                <input
                  onChange={(e) => onInputChange(e)}
                  type={formArray[currentIndex].type}
                  required={formArray[currentIndex].required}
                  value={resultArr[currentIndex]}
                />
              </div>
            </div>
            <div className="navigation">
              {currentIndex !== formArray.length - 1 ? (
                <button
                  disabled={resultArr[currentIndex]?.length > 0 ? false : true}
                  onClick={() =>
                    setCurrentIndex((currentIndex) => currentIndex + 1)
                  }
                >
                  Next
                </button>
              ) : (
                <button
                  disabled={resultArr[currentIndex]?.length > 0 ? false : true}
                  onClick={() => setIsRegistered(true)}
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h3>Thanks for the registration</h3>
          </>
        )}
      </div>
    </>
  );
}
