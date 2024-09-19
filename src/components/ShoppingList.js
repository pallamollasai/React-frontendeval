import React, { useState, useEffect } from "react";
import "./shoppinglist.css";
//import "./shoppinglist.module.css";
//import shoppingListStyles from "../component/shoppinglist.module.css";

let timer;
const URL = "https://api.frontendeval.com/fake/food/";
export default function ShoppingList() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [greyOutItems, setGreyOutItems] = useState([]);
  //const []

  
  useEffect(() => {
    if (searchKeyWord.length >= 2) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fetchApiCall(searchKeyWord);
      }, 700);
    }
  }, [searchKeyWord]);

  useEffect(() => {}, [foodItems]);

  const onSearchKeyWordChange = (e) => {
    setSearchKeyWord((prevValue) => {
      return e.target.value;
    });
    if (e.target.value === "" && e.target.value < 2) {
      setFoodItems([]);
      setGreyOutItems([]);
    }
  };

  const onShoppingListItemChange = (e, index) => {
    if (e.target.tagName === "INPUT") {
      //console.log("input is clicked");
      setGreyOutItems((greyOutItems) => {
        var arr = Array.from(greyOutItems);
        arr[index] = !arr[index];
        //console.log("prev value is ", arr);
        return arr;
      });
    }
    if (e.target.tagName === "BUTTON") {
      setFoodItems((foodItems) => {
        var arr = Array.from(foodItems);
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      });
      setGreyOutItems((greyOutItems) => {
        var arr = Array.from(greyOutItems);
        // YOU CAN USE FILTER HERE
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      });
    }
  };

  const fetchApiCall = (searchKeyWord) => {
    fetch(URL + searchKeyWord)
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
        setGreyOutItems(() => {
          // YOU CAN USE FOLLOWING ONE ALSO
          //var arr = Array(data.length).fill(false);
          var arr = Array(data.length);
          for (var i = 0; i < arr.length; i++) {
            arr[i] = false;
          }
          return arr;
        });
        // console.log("data is ", data);
      });
  };

  return (
    <>
      <div className="search-keyword-input-container">
        <input
          type="text"
          value={searchKeyWord}
          onChange={onSearchKeyWordChange}
        />
      </div>
      <div
        className={`shopping-list-container  ${
          foodItems.length > 0 ? "border" : ""
        }`}
      >
        {foodItems.map((item, index) => (
          <React.Fragment key={item + index}>
            <div
              className="shopping-list-item"
              onClick={(e) => onShoppingListItemChange(e, index)}
              key={item + index}
            >
              <input defaultChecked={greyOutItems[index]} type="checkbox" />
              <span className={`${greyOutItems[index] ? "cross" : ""}`}>
                {<b>{item.substring(0, searchKeyWord.length)}</b>}
                {item.substring(searchKeyWord.length)}
              </span>
              <button>X</button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
