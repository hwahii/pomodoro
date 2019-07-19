import React from "react";
import "./css-circular-prog-bar.css";
import startRedIcon from "../icons/start_red.svg";
import pauseGrayIcon from "../icons/pause_gray.svg";
import resetGrayIcon from "../icons/reset_gray.svg";
import completeIcon from "../icons/complete.svg";

const PomodoroTimer = () => (
  <div className="main-panel">
    <div className="pomodoro-timer-box">
      <div className="timer-top-tasktext-margin" />
      <div className="timer-task-text">My First Task</div>
      <div className="timer-tasktext-tasktomatos-margin" />
      <div className="timer-task-tomatos">O O O O</div>
      <div className="timer-tomatos-pomodoro-margin" />
      <div>
        <div className="progress-circle p75 over50">
          <span>06:25</span>
          <div className="left-half-clipper">
            <div className="first50-bar" />
            <div className="value-bar" />
          </div>
        </div>
      </div>
      <div className="timer-pomodoro-buttons-margin" />
      <div className="timer-buttons">
        <div className="small-circlebutton">
          <img src={startRedIcon} alt="start" />
        </div>
        <div className="small-circlebutton">
          <img src={pauseGrayIcon} alt="pause" />
        </div>
        <div className="small-circlebutton">
          <img src={resetGrayIcon} alt="reset" />
        </div>
      </div>
      <div className="timer-buttons-complete-margin" />
      <div className="timer-complete-box">
        <div className="timer-complete-img">
          <img src={completeIcon} alt="taskcomplete" />
        </div>
        <div className="timer-complete-text">TASK COMPLETE</div>
      </div>
      <div className="timer-complete-slogo-margin" />
      <div className="small-logo">
        <div>POMODORO</div>
      </div>
    </div>
  </div>
);
export default PomodoroTimer;
