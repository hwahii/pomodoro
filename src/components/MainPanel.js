import React from "react";
import NoTask from './NoTask';
import PomodoroTimer from './PomodoroTimer';
import "./App.css";

class MainPanel extends React.Component {
  render() {
    const timerMode = this.props.timerMode;
    return <Tomato timerMode={timerMode} />;
  }
}

function Tomato(props) {
  const timerMode = props.timerMode;
  if (timerMode === "PomodoroTimer") {
    return <PomodoroTimer />;
  } else if (timerMode === "NoTask") {
    return <NoTask />;
  }
}

export default MainPanel;