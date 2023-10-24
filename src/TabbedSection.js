import React, { useState } from "react";
import "./TabbedSection.css";

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabTitles = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="tabs-container">
      <div className="tabbed-section">
        <div className="tab-titles">
          {tabTitles.map((title, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`tab-title ${index === activeTab ? "active" : ""}`}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="indicator" style={{ left: `${activeTab * 100}%` }} />
      </div>
    </div>
  );
};

export default TabbedSection;
