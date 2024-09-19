import React, { useState } from "react";
import "./styles.css";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [limit, setLimit] = useState(5);

  const handleRatingClick = (i) => {
    setRating(i + 1);
  };

  return (
    <>
      <div className="star-container">
        {[...Array(limit)].map((star, index) => (
          <>
            <div
              className={`star-div ${index < rating ? "star-checked" : ""}`}
              key={index}
              onClick={() => handleRatingClick(index)}
            ></div>
          </>
        ))}
      </div>
    </>
  );
}
