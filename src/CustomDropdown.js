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
    <div className={`custom-dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-label" onClick={() => setIsOpen(!isOpen)}>
        {labelContent}
        <div className="dropdown-icon" onClick={() => setIsOpen(!isOpen)}>
          <img src={dropdownIcon} alt="Dropdown Icon" />
        </div>
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
