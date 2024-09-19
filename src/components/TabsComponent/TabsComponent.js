import React, { useState, useEffect } from "react";
import "./style.css";
export default function TabsComponent() {
  const [currentTab, setCurrentTab] = useState("tab1");

  const handleChangeTab = (e) => {};

  return (
    <>
      <div className="tab-container">
        <div onClick={() => setCurrentTab("tab1")}>Tab1</div>
        <div onClick={() => setCurrentTab("tab2")}>Tab2</div>
      </div>
      <div>
        {currentTab === "tab1" ? (
          <p>Tab1 Details Here</p>
        ) : (
          <p>Tab2 Details Here</p>
        )}
      </div>
    </>
  );
}
