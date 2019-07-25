import React from 'react';
import './App.css';
import './Tab.css';
import './TaskList.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TomatoSmallColor from '../icons/tomato_small_color.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import checkIcon from '../icons/complete_gray.svg';

class TomatoSelectIcon extends React.Component {
	render() {
		const isSelected = this.props.isSelected;
		if (isSelected) {
			return (
				<img
					src={TomatoSmallColor}
					alt="tomatoSmallColor"
					className="selected-tomato"
				/>
			);
		} else {
			return <div className="unselected-tomato" />;
		}
	}
}
class Tomatos extends React.Component {
	render() {
		const tomatos = this.props.tomatos;
		return (
			<div className="tomatos-inline">
				{tomatos.map((p, i) => {
					return (
						<div className="little-tomato" key={i}>
							<CircularProgressbar
								value={p}
								strokeWidth={47}
								background
								backgroundPadding={3}
								styles={buildStyles({
									strokeLinecap: 'butt',
									trailColor: '#414141',
									pathColor: '#ea5548',
									backgroundColor: '#ea5548'
								})}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}
class DoneTask extends React.Component {
	render() {
		const value = this.props.value;
		const tomatos = this.props.tomatos;
		return (
			<div className="tabpanel-table-unit done-table-unit">
				<img className="done-icon" src={checkIcon} alt="check" />
				<div>
					<div className="ring-tone-name">{value}</div>
					<Tomatos tomatos={tomatos} />
				</div>
				<div className="detail">···</div>
			</div>
		);
	}
}
class Task extends React.Component {
	render() {
		const value = this.props.value;
		const isSelected = this.props.isSelected;
		const tomatos = this.props.tomatos;
		return (
			<div className="tabpanel-table-unit">
				<TomatoSelectIcon isSelected={isSelected} />
				<div>
					<div className="ring-tone-name">{value}</div>
					<Tomatos tomatos={tomatos} />
				</div>
				<div className="detail">···</div>
			</div>
		);
	}
}
class TaskList extends React.Component {
	render() {
		return (
			<div className="sub-content">
				<div className="sub-content-box">
					<div className="sub-content-title">TASK LISTS</div>
					<div className="sub-content-separation" />
					<Tabs selectedTabClassName="tab-selected">
						<TabList className="tablist">
							<Tab className="tab">TODO</Tab>
							<Tab className="tab">DONE</Tab>
						</TabList>
						<TabPanel>
							<Task
								value={'My First Task'}
								isSelected={true}
								tomatos={[100, 100, 75, 0]}
							/>
							<Task
								value={'My Second Task'}
								isSelected={false}
								tomatos={[0, 0]}
							/>
							<Task
								value={'My Third Task'}
								isSelected={false}
								tomatos={[100, 0, 0]}
							/>
							<Task
								value={'My Fourth Task'}
								isSelected={false}
								tomatos={[100, 100, 0]}
							/>
							<Task
								value={'My Fifth Task'}
								isSelected={false}
								tomatos={[0, 0]}
							/>
							<Task value={'My Sixth Task'} isSelected={false} tomatos={[0]} />
						</TabPanel>
						<TabPanel>
							<DoneTask
								value={'My First Task'}
								isSelected={true}
								tomatos={[100, 100, 100, 100]}
							/>
							<DoneTask
								value={'My Second Task'}
								isSelected={false}
								tomatos={[100, 100]}
							/>
							<DoneTask
								value={'My Third Task'}
								isSelected={false}
								tomatos={[100, 0, 0]}
							/>
							<DoneTask
								value={'My Fourth Task'}
								isSelected={false}
								tomatos={[100, 100, 0]}
							/>
							<DoneTask
								value={'My Fifth Task'}
								isSelected={false}
								tomatos={[0, 0]}
							/>
							<DoneTask
								value={'My Sixth Task'}
								isSelected={false}
								tomatos={[0]}
							/>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default TaskList;
