import React, { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("radio-1");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const isMobileView = window.innerWidth <= 768;

  return (
    <div className="container">
      <div className="tabs">
        <input
          type="radio"
          name="tabs"
          id="radio-1"
          checked={selectedTab === "radio-1"}
          onChange={() => handleTabChange("radio-1")}
        />
        <label
          htmlFor="radio-1"
          className={`tab ${selectedTab === "radio-1" ? "active" : ""}`}
        >
          {isMobileView ? "VIVAs" : "VIVAs"}
        </label>

        <input
          type="radio"
          name="tabs"
          id="radio-2"
          checked={selectedTab === "radio-2"}
          onChange={() => handleTabChange("radio-2")}
        />
        <label
          htmlFor="radio-2"
          className={`tab ${selectedTab === "radio-2" ? "active" : ""}`}
        >
          {isMobileView ? "IMP Topics" : "IMP Topics"}
        </label>

        <input
          type="radio"
          name="tabs"
          id="radio-3"
          checked={selectedTab === "radio-3"}
          onChange={() => handleTabChange("radio-3")}
        />
        <label
          htmlFor="radio-3"
          className={`tab ${selectedTab === "radio-3" ? "active" : ""}`}
        >
          {isMobileView ? "IMP Ques" : "IMP Questions"}
        </label>

        <input
          type="radio"
          name="tabs"
          id="radio-4"
          checked={selectedTab === "radio-4"}
          onChange={() => handleTabChange("radio-4")}
        />
        <label
          htmlFor="radio-4"
          className={`tab ${selectedTab === "radio-4" ? "active" : ""}`}
        >
          {isMobileView ? "Prac papers" : "Practice papers"}
        </label>

        <span className="glider"></span>
      </div>
    </div>
  );
}

export default Tabs;
