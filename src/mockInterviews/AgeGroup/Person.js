import React, { useState, useEffect } from "react";
import "./styles.css";
export default function Person({ person, onPersonAgeEdit }) {
  return (
    <>
      <div className="person-card">
        <div>
          <span>Name: {person.name}</span>
          <span>Age: {person.age}</span>
          <span>PhoneNumber: {person.phoneNumber}</span>
          <span>Email: {person.email}</span>
        </div>
        <div className="person-card-button">
          <button onClick={(e) => onPersonAgeEdit(e, person)}>Edit</button>
        </div>
      </div>
    </>
  );
}
