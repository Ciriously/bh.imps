import React from "react";
import AllPages from "./components/pdf/all-pages";
import Bhimps from "./bhimps";
import Tabs from "./Tabs";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Bhimps />
      {/* Your other content */}
      <Tabs />
      {/* More content */}

      {/* <h4></h4> */}
      {/* <div className="all-page-container">
        <AllPages /> 
      </div>
      <hr /> */}
    </div>
  );
}
