import React, { useState } from "react";
import "./CustomDropdown.css";
import dropdownIcon from "./drop.svg"; // Import the dropdown image

function CustomDropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const labelContent = selectedOption ? selectedOption : label;

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-label ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {labelContent}
        <span style={{ marginLeft: "4px" }}>
          <img src={dropdownIcon} alt="Dropdown Icon" />
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-box">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`dropdown-option ${
                selectedOption === option ? "selected" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
