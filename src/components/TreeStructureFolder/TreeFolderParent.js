import React from "react";
import TreeFolderStructure from "./TreeFolderStructure";
import { dir } from "./data";
export default function TreeFolderParent() {
  return (
    <>
      <TreeFolderStructure dir={dir} />
    </>
  );
}
