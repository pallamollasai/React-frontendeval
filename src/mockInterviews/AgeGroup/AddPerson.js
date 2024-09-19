import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
export default function AddPerson({
  handleShowAddPersonDialog,
  editPersonData = {},
}) {
  const [personData, setPersonData] = useState({
    name: editPersonData.name || "",
    email: editPersonData.email || "",
    phoneNumber: editPersonData.phoneNumber || "",
    age: editPersonData.age || "",
  });
  const [isEditablePerson, setIsEditablePerson] = useState(
    Object.keys(editPersonData).length ? true : false
  );

  const handleOnNameChange = (e) => {
    setPersonData((prevPersonData) => {
      return {
        ...prevPersonData,
        name: e.target.value,
      };
    });
  };

  const handleOnEmailChange = (e) => {
    setPersonData((prevPersonData) => {
      return {
        ...prevPersonData,
        email: e.target.value,
      };
    });
  };

  const handleOnPhoneNumberChange = (e) => {
    setPersonData((prevPersonData) => {
      return {
        ...prevPersonData,
        phoneNumber: e.target.value,
      };
    });
  };

  const handleOnAgeChange = (e) => {
    setPersonData((prevPersonData) => {
      return {
        ...prevPersonData,
        age: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    // handleShowAddPersonDialog(e, "ADD_PERSON");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="add-person-form-container">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={personData.name}
              onChange={handleOnNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={personData.email}
              onChange={handleOnEmailChange}
            />
          </div>
          <div>
            <label htmlFor="phonenumber">PhoneNumber</label>
            <input
              type="text"
              id="phonenumber"
              value={personData.phoneNumber}
              onChange={handleOnPhoneNumberChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              min="1"
              max="100"
              value={personData.age}
              onChange={handleOnAgeChange}
            />
          </div>
          <div>
            {isEditablePerson ? (
              <button
                onClick={(e) =>
                  handleShowAddPersonDialog(e, "EDIT_PERSON", personData)
                }
              >
                Edit
              </button>
            ) : (
              <button
                onClick={(e) =>
                  handleShowAddPersonDialog(e, "ADD_PERSON", personData)
                }
              >
                Add
              </button>
            )}
          </div>
          <div>
            <button onClick={(e) => handleShowAddPersonDialog(e, "CANCEL")}>
              Canel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
