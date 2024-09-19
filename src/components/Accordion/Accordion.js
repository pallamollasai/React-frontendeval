import React, { useState } from "react";
import "./style.css";

const data = [
  {
    section: "How are you?",
    content: "Doing good"
  },
  {
    section: "How old are you",
    content: "why u want to know"
  },
  {
    section: "How are youuuu?",
    content: "Doing good"
  },
  {
    section: "How old are yiiiiou",
    content: "why u want to know"
  }
];

export default function Accordion() {
  const [currentAccordionItem, setCurrentAccordionItem] = useState(-1);
  const [accordionItems, setAccordionItems] = useState(
    Array(data.length).fill(false)
  );

  const handleCurrentAccordionItem = (index) => {
    const previous = accordionItems[index];
    const values = Array(data.length).fill(false);
    values[index] = !previous;
    setAccordionItems(values);
  };
  return (
    <>
      <div className="accordion-wrapper">
        {data.map((item, index) => (
          <>
            <div className="accordion-container">
              <h4
                className="accordion-section"
                onClick={() => handleCurrentAccordionItem(index)}
              >
                {item.section}
              </h4>
              <div
                className={`accordion-content ${
                  accordionItems[index] ? "" : "hide"
                }`}
              >
                <span>{item.content}</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
