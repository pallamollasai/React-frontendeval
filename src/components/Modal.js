import React, { useState, useEffect, useRef } from "react";
import "../components/modal.css";

export default function Modal() {
  const [isModalOpened, setModalOpened] = useState(false);
  const [isOfferAccepted, setOfferAccepted] = useState(false);
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.id !== "offer-modal" &&
        !inputRef.current.classList.contains("hide")
      ) {
        inputRef.current.classList.add("hide");
        closeModal();
      }
      // if (e.target.id != "offer-modal") {
      //   if (inputRef.)
      // }
      // console.log(inputRef.current);
      // console.log(" tafrg ", e.target.id);
      // if (e.target.id !== "offer-modal" && e.target.id !== "show-offer") {
      //   console.log("hello");
      //   if (!inputRef.current.classList.contains("hide")) {
      //     inputRef.current.classList.toggle("hide");
      //     buttonRef.current.classList.toggle("hide");
      //   }
      //   //inputRef.current.style.display = "none";
      //   //setMo
      //   // console.log("checking...");
      //   // closeModal();
      // }
    });
    return () => {
      document.removeEventListener("click", () => {
        console.log("event removed");
      });
    };
  }, []);

  const onAcceptOffer = () => {
    setOfferAccepted(true);
    setModalOpened(false);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <>
      <div className="container">
        <div
          ref={buttonRef}
          className={`show-offer ${
            isModalOpened || isOfferAccepted ? "hide" : ""
          } `}
        >
          <button
            id="show-offer"
            onClick={(e) => {
              e.stopPropagation();
              //inputRef.current.classList.remove("hide");
              setModalOpened(true);
            }}
          >
            Show Offer
          </button>
        </div>
        <div
          id="offer-modal"
          ref={inputRef}
          className={`offer-modal ${isModalOpened ? "" : "hide"}`}
        >
          <span className="close-modal" onClick={() => setModalOpened(false)}>
            X
          </span>
          <p>Click the below button to accept our offer.</p>
          <button onClick={onAcceptOffer}>Accept Offer</button>
        </div>
        <div className={`${isOfferAccepted ? "" : "hide"}`}>
          <p>Offer Accepted</p>
        </div>
      </div>
    </>
  );
}
