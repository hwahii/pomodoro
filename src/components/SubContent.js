import React from "react";
import "./App.css";
import TomatoSmallColor from "../icons/tomato_small_color.svg";
import TomatoSmallGray from "../icons/tomato_small_gray.svg";
class SubContent extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }
  addTask() {
    this.props.onTimerModeChange("PomodoroTimer");
  }
  render() {
    return (
      <div className="sub-content">
        <div className="sub-content-box">
          <div className="sub-content-title">ADD NEW TASK</div>
          <div className="sub-content-margin" />
          <div className="sub-content-separation" />
          <div className="sub-content-margin" />
          <div className="sub-content-sub-title">TASK TITLE</div>
          <input className="sub-content-input" placeholder="My Second Task" />
          <div className="sub-content-margin" />
          <div className="sub-content-sub-title">ESTIMATED TOMOTO</div>
          <div className="estimated-tomoto-inline">
            <img src={TomatoSmallColor} alt="tomatoSmallColor" />
            <img src={TomatoSmallColor} alt="tomatoSmallColor" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
            <img src={TomatoSmallGray} alt="tomatoSmallGray" />
          </div>
          <div className="sub-content-margin" />
          <div className="sub-content-margin" />
          <div>
            <button className="add-task-button" onClick={this.addTask}>
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SubContent;
