import React from "react";
import { Switch, Route } from 'react-router-dom';
import NoTask from './NoTask';
import PomodoroTimer from './PomodoroTimer';
import "./App.css";

const MainPanel = () => (
    <Switch>
        <Route exact path='/' component={NoTask}/>
        <Route path='/pomodoro-timer' component={PomodoroTimer}/>
    </Switch>
);

export default MainPanel;