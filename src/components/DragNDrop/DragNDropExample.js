import React, { useState } from "react";
export default function DragNDropExample() {
  const [widgets, setWidgets] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log("widgetType is ", widgetType);
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget A")}
      >
        Widget A
      </div>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget B")}
      >
        Widget B
      </div>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget C")}
      >
        Widget C
      </div>

      <div
        className="container"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {widgets.map((widget, index) => (
          <>
            <div key={index}>{widget}</div>
          </>
        ))}
      </div>
    </>
  );
}
