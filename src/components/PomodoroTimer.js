import React from 'react';
import './css-circular-prog-bar.css';
import startRedIcon from '../icons/start_red.svg';
import pauseGrayIcon from '../icons/pause_gray.svg';
import resetGrayIcon from '../icons/reset_gray.svg';
import completeIcon from '../icons/complete.svg';

class PomodoroTimer extends React.Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.state = {
			time: 0,
			isOn: false,
			start: 0
		};
	}

	startTimer() {
		if (this.state.isOn === false) {
			this.setState({
				isOn: true,
				time: this.state.time,
				start: Date.now() - this.state.time
			});
			this.timer = setInterval(() => this.setState({
				time: Date.now() - this.state.start
			}), 1000);
		}
	}
	stopTimer() {
		this.setState({ isOn: false });
		clearInterval(this.timer);
	}
	resetTimer() {
		this.setState({ time: 0, isOn: false });
	}
	render() {
		return (
			<div className="main-panel">
				<div className="pomodoro-timer-box">
					<div className="timer-top-tasktext-margin" />
					<div className="timer-task-text">My First Task</div>
					<div className="timer-tasktext-tasktomatos-margin" />
					<div className="timer-task-tomatos">O O O O</div>
					<div className="timer-tomatos-pomodoro-margin" />
					<div>
						<div className="progress-circle p75 over50">
							<span>{new Intl.DateTimeFormat('zh-TW', {
								minute: '2-digit',
								second: '2-digit'
							}).format(this.state.time)}</span>
							<div className="left-half-clipper">
								<div className="first50-bar" />
								<div className="value-bar" />
							</div>
						</div>
					</div>
					<div className="timer-pomodoro-buttons-margin" />
					<div className="timer-buttons">
						<div className="small-circlebutton" onClick={this.startTimer}>
							<img src={startRedIcon} alt="start" />
						</div>
						<div className="small-circlebutton" onClick={this.stopTimer}>
							<img src={pauseGrayIcon} alt="pause" />
						</div>
						<div className="small-circlebutton" onClick={this.resetTimer}>
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
	}
}
export default PomodoroTimer;
