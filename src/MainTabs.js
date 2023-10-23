import React from "react";
import "./MainTabs.css";

const MainTabs = () => {
  const [selectedOptions, setSelectedOptions] = React.useState({
    university: "",
    department: "",
    semester: "",
    subject: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: value,
    });
  };

  const renderDropdownField = (name, options) => {
    return (
      <select
        value={selectedOptions[name]}
        onChange={handleChange}
        name={name}
        className="main-tabs-select"
      >
        <option value="">Select a {name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="main-tabs">
      {renderDropdownField("university", [
        "University of Mumbai",
        "University of Pune",
      ])}
      {renderDropdownField("department", [
        "Computer Science",
        "Information Technology",
      ])}
      {renderDropdownField("semester", [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
      ])}
      <span className="subject-label">Subjects:</span>
      {renderDropdownField("subject", [
        "Data Structures",
        "Algorithms",
        "Programming in C++",
        "Java Programming",
        "Python Programming",
      ])}
    </div>
  );
};

export default MainTabs;
