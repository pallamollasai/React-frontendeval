import React, { useState } from "react";
const checkBoxes = ["Scient", "Arts", "CSE", "PSU"];
export default function SelectAllCheckBoxes() {
  const [checkBoxValues, setCheckBoxValues] = useState([...checkBoxes]);
  const [selectAllCheckBoxes, setSelectAllCheckBoxes] = useState(
    Array(checkBoxes.length).fill(false)
  );
  const [selectAllClicked, setSelectAllClicked] = useState(false);

  const handleSelectAllCheckBoxes = () => {
    const checkBoxes = Array(checkBoxValues.length).fill(!selectAllClicked);
    setSelectAllCheckBoxes(checkBoxes);
    setSelectAllClicked(!selectAllClicked);
  };

  const handleOnCheck = (index) => {
    const checkBoxes = [...selectAllCheckBoxes];
    checkBoxes[index] = !checkBoxes[index];
    setSelectAllCheckBoxes(checkBoxes);
  };
  return (
    <>
      {checkBoxValues.map((checkBox, index) => (
        <>
          <div key={index}>
            <label htmlFor={checkBox}>{checkBox}</label>
            <input
              type="checkbox"
              id={checkBox}
              checked={selectAllCheckBoxes[index]}
              onChange={() => handleOnCheck(index)}
            />
          </div>
        </>
      ))}
      <button onClick={handleSelectAllCheckBoxes}>
        {" "}
        Select ALl CheckBoxes
      </button>
    </>
  );
}
