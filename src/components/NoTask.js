import React from "react";
import TomatoSmallColor from "../icons/tomato_small_color.svg";

const NoTask = () => (
  <div className="main-panel">
    <div className="pomodoro-box">
      <div className="no-task-pomodoro-top-margin" />
      <div className="no-task-pomodoro-box">
        <img
          className="pomodoro-init"
          src={TomatoSmallColor}
          alt="tomatoSmallColor"
        />
        <div className="no-task-logo">
          <div>POMODORO</div>
        </div>
      </div>
      <div className="no-task-pomodoro-message-margin" />
      <div className="message">
        You don’t have any task now,
        <br />
        please add task first!
      </div>
      <div className="no-task-msg-slogo-margin" />
      <div className="small-logo">
        <div className="lato">POMODORO</div>
      </div>
    </div>
  </div>
);
export default NoTask;
