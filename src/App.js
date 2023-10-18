import React from "react";
import AllPages from "./components/pdf/all-pages"; // Import the AllPages component

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h4></h4> */}
      <div className="all-page-container">
        <AllPages /> {/* Render the AllPages component here */}
      </div>
      <hr />
    </div>
  );
}
