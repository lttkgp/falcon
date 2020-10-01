import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { setThemeOnUserPref, themeChecker } from "./utils";

import Sidebar from "./components/sidebar";
import { CSwitch } from "./components/CSwitch";

import "./styles/App.scss";

function App() {
  useEffect(themeChecker, []);
  useEffect(setThemeOnUserPref, []);

  return (
    <div className="App">
      <Router>
        {/* Sidebar */}
        <Sidebar></Sidebar>

        {/* Content Switch */}
        <div className="content expand">
          <CSwitch />
        </div>
      </Router>
    </div>
  );
}

export default App;
