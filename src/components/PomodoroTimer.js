import React from 'react';
import './css-circular-prog-bar.css';
import startRedIcon from '../icons/start_red.svg';
import startGrayIcon from '../icons/start_gray.svg';
import pauseGrayIcon from '../icons/pause_gray.svg';
import resetGrayIcon from '../icons/reset_gray.svg';
import completeIcon from '../icons/complete.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';
function StartIcon(props) {
	const isOn = props.isOn;
	const onClick = props.onClick;
	if (isOn) {
		return (
			<div className="small-circlebutton" onClick={onClick}>
				<img src={startRedIcon} alt="start" />
			</div>
		);
	} else {
		return (
			<div className="small-circlebutton" onClick={onClick}>
				<img src={startGrayIcon} alt="start" />
			</div>
		);
	}
}
class PomodoroTimer extends React.Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.state = {
			time: 0,
			isOn: false,
			start: 0,
			percentage: 0
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
				time: Date.now() - this.state.start,
				percentage: Math.floor((Date.now() - this.state.start) / (60 * 10))
			}), 1000);
		}
	}
	stopTimer() {
		this.setState({ isOn: false });
		clearInterval(this.timer);
	}
	resetTimer() {
		this.setState({ time: 0, isOn: false, percentage: 0 });
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
					<div className="pomodoro-text">
						<CircularProgressbar value={this.state.percentage} text={new Intl.DateTimeFormat('zh-TW', {
							minute: '2-digit',
							second: '2-digit'
						}).format(this.state.time)} strokeWidth={15} styles={buildStyles({
							strokeLinecap: 'butt',
							textSize: '13px',
							textColor: '#333333',
							pathColor: '#EA5548',
							trailColor: '#ACACAC',
						})} />
					</div>
					<div className="timer-pomodoro-buttons-margin" />
					<div className="timer-buttons">
						<StartIcon isOn={this.state.isOn}  onClick={this.startTimer} />
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
