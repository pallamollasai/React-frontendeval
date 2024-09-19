import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import AddPerson from "./AddPerson";
import Person from "./Person";

// const ageGroups = {
//   "1-18": [],
//   "19-25": [],
//   "25-45": [],
//   "45+": [],
// };

const ageGroups = [
  { ageGroup: "1-18", data: [] },
  { ageGroup: "19-25", data: [] },
  { ageGroup: "25-45", data: [] },
  { ageGroup: "45+", data: [] },
];
export default function PersonGroups() {
  const [showAddPersonDialog, setShowAddPersonDialog] = useState(false);
  const [personsData, setPersonsData] = useState(ageGroups);
  const [editPersonData, setEditPersonData] = useState({});
  const [currentEditPersonAgeGroupIndex, setCurrentEditPersonAgeGroupIndex] =
    useState(0);
  const [currentEditPersonIndex, setCurrentEditPersonIndex] = useState(0);

  const handleShowAddPersonDialog = (
    e,
    type,
    personData = {},
    ageGroup = ""
  ) => {
    setShowAddPersonDialog(false);
    if (type === "CANCEL") {
    } else if (type === "ADD_PERSON") {
      addPersonToAgeGroup(personData, personsData);
    } else if (type === "EDIT_PERSON") {
      console.log("editable person & age group is ", personData, ageGroup);
      let updatedPersonsData = deletePerson(
        currentEditPersonAgeGroupIndex,
        currentEditPersonIndex,
        personsData
      );
      addPersonToAgeGroup(personData, updatedPersonsData);
      setEditPersonData({});
    }
  };

  const deletePerson = (
    currentEditPersonAgeGroupIndex,
    currentEditPersonIndex,
    data
  ) => {
    return data.map((personData, index) => {
      if (index == currentEditPersonAgeGroupIndex) {
        const updatedEntries = personData.data.filter(
          (person, ind) => ind !== currentEditPersonIndex
        );
        return {
          ...personData,
          data: [...updatedEntries],
        };
      } else {
        return { ...personData };
      }
    });
  };

  const addPersonToAgeGroup = (personData, data) => {
    if (Object.keys(personData).length) {
      const ageGroupIndex = determinAgeGroupIndex(personData.age, data);
      const updatedPersonsData = addPerson(personData, ageGroupIndex, data);
      setPersonsData(updatedPersonsData);
    } else {
      console.log("Invalid data");
    }
  };

  const determinAgeGroupIndex = (personAge, data) => {
    let ageGroupIndex = data.length - 1;
    data.forEach((pData, index) => {
      const [lowerAge, higherAge] = pData.ageGroup.split("-");
      if (+personAge >= +lowerAge && +personAge <= +higherAge) {
        ageGroupIndex = index;
      }
    });
    return ageGroupIndex;
  };

  const addPerson = (personData, personAgeGroupIndex, data) => {
    return data.map((pData, index) => {
      if (index === personAgeGroupIndex) {
        return {
          ...pData,
          data: [...pData.data, personData],
        };
      } else {
        return pData;
      }
    });
  };

  const determineAgeGroupAndAddPerson = (personAge, personData) => {
    return personsData.map((pData) => {
      const [lowerAge, higherAge] = pData.ageGroup.split("-");
      if (
        (+personAge >= +lowerAge && +personAge <= +higherAge) ||
        (pData === personsData[personsData.length - 1] &&
          personAge > +parseInt(lowerAge))
      ) {
        return {
          ...pData,
          data: [...pData.data, personData],
        };
      } else {
        return pData;
      }
    });
  };

  const handleOnAddPerson = (e) => {
    setShowAddPersonDialog(!showAddPersonDialog);
  };

  const handleOnModalClose = (e) => {
    setShowAddPersonDialog(false);
  };

  const handleOnPersonAgeEdit = (
    e,
    personData,
    ageGroupIndex = -1,
    personIndex = -1
  ) => {
    console.log("editable inside::: ", personData, ageGroupIndex, personIndex);
    setEditPersonData(personData);
    setCurrentEditPersonAgeGroupIndex(parseInt(ageGroupIndex));
    setCurrentEditPersonIndex(parseInt(personIndex));
    setShowAddPersonDialog(!showAddPersonDialog);
  };

  const handleOnDrag = (e, personData, ageGroupIndex, personIndex) => {
    let editPersonDetails = JSON.stringify({
      personData: personData,
      ageGroupIndex: ageGroupIndex,
      personIndex: personIndex,
    });
    console.log("stringified details are ", editPersonDetails);
    e.dataTransfer.setData("editPersonDetails", editPersonDetails);
    setEditPersonData(personData);
    // setCurrentEditPersonAgeGroupIndex(parseInt(ageGroupIndex));
    // setCurrentEditPersonIndex(parseInt(personIndex));
  };

  const handleOnDrop = (e, toAgeGroupIndex = "") => {
    let editPersonDetails = e.dataTransfer.getData("editPersonDetails");
    editPersonDetails = JSON.parse(editPersonDetails);
    console.log(
      "After Drag details are:: ",
      editPersonDetails,
      toAgeGroupIndex
    );
    // handleShowAddPersonDialog(e,"EDIT_PERSON",
    //   editPersonDetails.personData,
    //   ageGroup = "")
    let updatedPersonsData = deletePerson(
      editPersonDetails.ageGroupIndex,
      editPersonDetails.personIndex,
      personsData
    );
    editPersonDetails.personData.age = parseInt(
      personsData[toAgeGroupIndex].ageGroup.split("-")[0]
    );
    updatedPersonsData = addPerson(
      editPersonDetails.personData,
      toAgeGroupIndex,
      updatedPersonsData
    );
    setPersonsData(updatedPersonsData);
    setEditPersonData({});
    setCurrentEditPersonAgeGroupIndex(0);
    setCurrentEditPersonIndex(0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log;
    setEditPersonData({});
    setCurrentEditPersonAgeGroupIndex(0);
    setCurrentEditPersonIndex(0);
  };

  return (
    <>
      <div>
        <button onClick={(e) => handleOnAddPerson(e)}>Add Person</button>
      </div>
      <div className="persons-container">
        {personsData.map((personData, index) => (
          <div
            key={index}
            className="person-container"
            onDrop={(e) => handleOnDrop(e, index)}
            onDragOver={handleDragOver}
          >
            {personData.ageGroup}
            <ul>
              {personData.data.map((person, ind) => (
                <li
                  draggable
                  onDragStart={(e) => handleOnDrag(e, person, index, ind)}
                >
                  {console.log("age group is ", personData.ageGroup)}
                  <Person
                    key={ind + person.email}
                    person={person}
                    // ageGroup={index}
                    onPersonAgeEdit={(e, pData) =>
                      handleOnPersonAgeEdit(e, pData, index, ind)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {showAddPersonDialog ? (
        <Modal
          isOpen={showAddPersonDialog}
          onClose={(e) => handleOnModalClose(e)}
        >
          <AddPerson
            handleShowAddPersonDialog={handleShowAddPersonDialog}
            editPersonData={editPersonData}
          />
        </Modal>
      ) : (
        ``
      )}
    </>
  );
}
