import React, { useEffect, useState } from "react";
import "./imageslider.css";

const URL = "https://www.reddit.com/r/aww/top/.json?t=all";

export default function ImageSlider() {
  const [imagesData, setImagesData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log("response is ", response);
        if (response) {
          const children =
            response.data && response.data.children.length > 0
              ? response.data.children
              : null;
          if (children.length) {
            children.forEach((element, index) => {
              if (element.data && element.data.url_overridden_by_dest) {
                const url = element.data.url_overridden_by_dest;
                if (url.endsWith("jpg")) {
                  setImagesData((prevState, props) => {
                    return [...prevState, url];
                  });
                }
              }
            });
          }
        }
      });
  }, []);

  useEffect(() => {
    if (imagesData.length > 0) {
      setInterval(() => {
        setCurrentImageIndex((prevValue) => {
          prevValue += 1;
          if (prevValue === imagesData.length) {
            prevValue = 0;
          }
          return prevValue;
        });
        return () => {
          clearInterval();
        };
      }, 5000);
    }
  }, [imagesData]);

  const onChangeImage = (type) => {
    if (type === "DEC") {
      setCurrentImageIndex((prevValue, props) => {
        prevValue -= 1;
        console.log("prev Value in DEC is ", prevValue);
        if (prevValue === -1) {
          prevValue = imagesData.length - 1;
        }
        return prevValue;
      });
    } else if (type === "INC") {
      setCurrentImageIndex((prevValue, props) => {
        prevValue += 1;
        console.log("prev value in INC is ", prevValue);
        if (prevValue === imagesData.length) {
          prevValue = 0;
        }
        return prevValue;
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={imagesData[currentImageIndex]} alt="pictures Goes Here" />
          <div className="left-arrow">
            <span onClick={() => onChangeImage("DEC")}></span>
          </div>
          <div className="right-arrow">
            <span onClick={() => onChangeImage("INC")}></span>
          </div>
        </div>
      </div>
    </>
  );
}
