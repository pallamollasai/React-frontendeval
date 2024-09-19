import React, { useState } from "react";
import "./style.css";
export default function TreeFolderStructure({ dir }) {
  const [showFolder, setShowFolder] = useState(false);

  const handleShowFolder = (e) => {
    console.log("incoming..");
    e.stopPropagation();
    setShowFolder(!showFolder);
  };

  if (dir.type === "folder") {
    return (
      <>
        <div
          className="folder-container"
          onClick={(e) => handleShowFolder(e)}
          style={{ maring: 5 }}
        >
          <span role="img" aria-label="image  ">
            📭{dir.name}
          </span>
          {showFolder ? (
            <>
              {dir.items.map((el) => (
                <TreeFolderStructure dir={el} key={el.id} />
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  } else {
    return (
      <span
        style={{ margin: 5 }}
        onClick={(e) => e.stopPropagation()}
        role="img"
        aria-label="image"
      >
        📃 {dir.name}
      </span>
    );
  }
}
