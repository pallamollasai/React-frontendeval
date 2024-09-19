import React, { useState } from "react";
import "./treestructure.css";

const data = [
  {
    name: "Beveragues",
    children: [
      {
        name: "Water",
        children: [
          {
            name: "folder1",
            children: [
              {
                name: "folder2",
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Coffee",
        children: [
          /* {

                } */
        ]
      },
      {
        name: "Tea",
        children: [
          {
            name: "BlackTea",
            children: []
          },
          {
            name: "WhiteTea",
            children: []
          },
          {
            name: "Green Tea",
            children: [
              {
                name: "Syencha",
                children: []
              },
              {
                name: "Matcha",
                children: [
                  {
                    name: "folder3",
                    children: []
                  },
                  {
                    name: "folder4",
                    children: [
                      {
                        name: "folder5",
                        children: []
                      },
                      {
                        name: "folder6",
                        children: []
                      }
                    ]
                  },
                  {
                    name: "folder7",
                    children: []
                  }
                ]
              },
              {
                name: "Pi lo chun",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

const caret = ">";

let addData;
let i = 0;

export default function TreeStructure() {
  const [treeToggleObj, setToggleObj] = useState({});
  const getData = (data) => {
    if (data.children > 0) {
    }
  };

  const onCaretClick = (e, name, index) => {
    setToggleObj((prevObj) => {
      var obj = { ...treeToggleObj };
      obj[name + index] = obj[name + index] ? !obj[name + index] : false;
      console.log("tree obje", obj);
      return {
        ...prevObj,
        [name + index]: prevObj[name + index] ? !prevObj[name + index] : true
      };
    });
  };

  return (
    <>
      <div className="container">
        {(addData = (data) => (
          <>
            {/* <p>Hello</p> */}
            {data.map((element, index) => (
              //return (
              <>
                <div className="sub-tree-container" key={element.name + index}>
                  {/* {console.log("infine loopp....???", element)} */}
                  {element.children.length > 0 ? (
                    <div className="margin-left">
                      <span
                        className={`inline-block caret ${
                          treeToggleObj[element.name + index]
                            ? "caret-rotate"
                            : ""
                        }`}
                        onClick={(e) => onCaretClick(e, element.name, index)}
                      >
                        {caret}
                      </span>
                      <span
                        className={`inline-block caret ${
                          treeToggleObj[element.name + index]
                            ? "caret-hide"
                            : ""
                        }`}
                      >
                        {element.name}
                      </span>
                      <div>{addData(element.children)}</div>
                    </div>
                  ) : (
                    // <div>
                    <span className="block">{element.name}</span>
                    // </div>
                  )}
                </div>
                {/* <p>Hellooooooo</p>
                {console.log("element is ", element)}

                <p>{element.name}</p> */}
              </>
              //);
            ))}
          </>
        ))(data)}
      </div>
    </>
  );
}
