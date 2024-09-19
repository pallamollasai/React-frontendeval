import React, { useState, useRef, useEffect } from "react";
export default function FormElement() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [textArea, setTextArea] = useState("");
  const [selectValue, setSelectedValue] = useState("");
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState([]);

  const setInputTextValue = (e) => {
    setInputValue(e.target.value);
  };

  const setTextAreaValue = (e) => {
    setTextArea(e.target.value);
  };

  const setRadioInputValue = (e) => {
    setRadioValue(e.target.value);
  };

  const setCheckBoxInputValue = (e) => {
    const { value } = e.target;
    if (checkBoxValue.includes(value)) {
      setCheckBoxValue(checkBoxValue.filter((element) => element !== value));
    } else {
      setCheckBoxValue([...checkBoxValue, value]);
    }
  };

  const setSelectedInputValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const setMultipleSelectedValue = (e) => {
    const { value } = e.target;
    if (multiSelectValue.includes(value)) {
      setMultiSelectValue(multiSelectValue.filter((e) => e !== value));
    } else {
      setMultiSelectValue([...multiSelectValue, value]);
    }
  };

  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        required
        placeholder="enter email"
        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        value={inputValue}
        onChange={setInputTextValue}
        ref={inputRef}
      />
      <textarea
        value={textArea}
        cols="20"
        rows="20"
        onChange={setTextAreaValue}
      ></textarea>
      <label htmlFor="male">FeMale</label>
      <input
        type="radio"
        onChange={setRadioInputValue}
        name="gender"
        value="male"
        checked={radioValue === "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={setRadioInputValue}
        name="gender"
        value="female"
        checked={radioValue === "female"}
      />
      <label htmlFor="MaleCheck">MaleCheck</label>
      <input
        type="checkbox"
        onChange={setCheckBoxInputValue}
        name="gender"
        value="male"
        checked={checkBoxValue.includes("male")}
      />
      <label htmlFor="femaleCheck">Female Check</label>
      <input
        type="checkbox"
        onChange={setCheckBoxInputValue}
        name="gender"
        value="female"
        checked={checkBoxValue.includes("female")}
      />
      <label htmlFor="science">Sciene</label>
      <input
        type="checkbox"
        onChange={setCheckBoxInputValue}
        value="Science"
        checked={checkBoxValue.includes("Science")}
      />

      <select value={selectValue} onChange={setSelectedInputValue}>
        <option value="cse">cse</option>
        <option value="ece">ece</option>
        <option value="mme">mme</option>
      </select>

      <select
        multiple
        value={multiSelectValue}
        onChange={setMultipleSelectedValue}
      >
        <option value="cse">cse</option>
        <option value="ece">ece</option>
        <option value="mme">mme</option>
      </select>

      <p>input value {inputValue}</p>
      <p>text are value {textArea}</p>
      <p>male are femail {radioValue} </p>
      <p>Check value are {checkBoxValue}</p>
      <p>selected values are {selectValue}</p>
      <p>multiple selected values are {multiSelectValue.join(", ")}</p>
      {/* {checkBoxValue.map((element, index) => (
        <p key={index}>{element}</p>
      ))} */}
    </>
  );
}
