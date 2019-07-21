import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Analytics from "./Analytics";
import Ringtones from "./Ringtones";

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
      <Switch>
        <Route path="/add" render={(props) => (<AddTask onTimerModeChange={this.addTask} />)} />
        <Route path="/list" component={TaskList} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/ringtones" component={Ringtones} />
      </Switch>
    );
  }
}

export default SubContent;
