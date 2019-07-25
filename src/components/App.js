import React from 'react';
import './App.css';
import NavBar from './NavBar';
import MainPanel from './MainPanel';
import SubContent from './SubContent';

const timerModeNames = {
	p: 'PomodoroTimer',
	b: 'BreakTimer',
	n: 'NoTask'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleTimerModeChange = this.handleTimerModeChange.bind(this);
		this.state = { timerMode: timerModeNames.n };
	}

	handleTimerModeChange(timerMode) {
		this.setState({ timerMode: timerMode });
	}
	render() {
		const timerMode = this.state.timerMode;
		return (
			<div className="container">
				<MainPanel timerMode={timerMode} />
				<NavBar />
				<div className="sub-panel-border" />
				<SubContent onTimerModeChange={this.handleTimerModeChange} />
			</div>
		);
	}
}

export default App;
