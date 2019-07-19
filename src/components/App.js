import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import MainPanel from './MainPanel';
import SubContent from './SubContent';

function App() {
  return (
    <div className="container">
      <MainPanel />
      <NavBar />
      <div className="sub-panel-border" />
      <SubContent />
    </div>
  );
}

export default App;
