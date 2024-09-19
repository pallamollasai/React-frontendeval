import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
export default function Modal({ isOpen, onClose, children }) {
  // const [open, setOpen] = useState(isOpen);
  // console.log("open is ", open);

  const onModalClose = (e) => {
    onClose();
  };

  return (
    <>
      <div className={`modal-container ${isOpen ? "show" : "hide"}`}>
        <span className="modal-close-icon" onClick={(e) => onModalClose(e)}>
          X
        </span>
        <div>{children}</div>
      </div>
    </>
  );
}
