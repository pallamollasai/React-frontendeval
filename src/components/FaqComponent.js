import React, { useState } from "react";
import "../components/FaqStyles.css";

const data = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human"
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day"
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average."
  }
];

const arrow = ">";

// console.log("should display is ", shouldDisplay);

export default function FaqComponent() {
  const [shouldDisplay, setShouldDisplay] = useState(
    new Array(data.length).fill(false)
  );

  const displayAnswer = (index) => {
    setShouldDisplay((prevShouldDisplay) => {
      const value = !prevShouldDisplay[index];
      const array = [...prevShouldDisplay];
      array[index] = !prevShouldDisplay[index];
      console.log("array is ", array);
      return array;
    });
    // shouldDisplay[index] = !shouldDisplay[index];
    // console.log("index is ", shouldDisplay);
  };

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {data.map((faq, index) => (
          <React.Fragment key={index}>
            <div className="faq">
              <div className="arrow">
                <span className={`${shouldDisplay[index] ? "arrow-span" : ""}`}>
                  {arrow}
                </span>
              </div>
              <div className="qa">
                <p
                  className="question"
                  onClick={() => {
                    displayAnswer(index);
                  }}
                >
                  {faq.question}
                </p>
                <p className={shouldDisplay[index] ? "show" : "hide"}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
