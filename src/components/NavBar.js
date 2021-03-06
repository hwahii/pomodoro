import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import arrowIcon from '../icons/arrow.svg';
import TomatoSmallColor from '../icons/tomato_small_color.svg';

import AddIcon from './AddIcon';
import ListIcon from './ListIcon';
import AnalyticsIcon from './AnalyticsIcon';
import RingtonesIcon from './RingtonesIcon';
class ArrowIcon extends React.Component {
	render() {
		const activeIcon = this.props.activeIcon;
		if (activeIcon === 'None') {
			return (
				<div className="arrow">
					<img className="reverse-arrow" src={arrowIcon} alt="arrow" />
				</div>
			);
		} else {
			return (
				<div className="arrow">
					<img src={arrowIcon} alt="arrow" />
				</div>
			);
		}
	}
}
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { activeIcon: 'None' };
	}
	handleClick(icon) {
		this.setState({ activeIcon: icon });
	}

	render() {
		const activeIcon = this.state.activeIcon;
		return (
			<div className="sub-nav">
				<nav className="nav">
					<ul>
						<li>
							<Link to="/add" onClick={() => this.handleClick('Add')}>
								<AddIcon activeIcon={activeIcon} />
							</Link>
						</li>
						<li>
							<Link to="/list" onClick={() => this.handleClick('List')}>
								<ListIcon activeIcon={activeIcon} />
							</Link>
						</li>
						<li>
							<Link
								to="/analytics"
								onClick={() => this.handleClick('Analytics')}
							>
								<AnalyticsIcon activeIcon={activeIcon} />
							</Link>
						</li>
						<li>
							<Link
								to="/ringtones"
								onClick={() => this.handleClick('Ringtones')}
							>
								<RingtonesIcon activeIcon={activeIcon} />
							</Link>
						</li>
					</ul>
					<Link to="/" onClick={() => this.handleClick('None')}>
						<div className="toggle-tag">
							<img src={TomatoSmallColor} alt="tomatoSmallColor" />
							<ArrowIcon activeIcon={activeIcon} />
						</div>
					</Link>
				</nav>
			</div>
		);
	}
}
export default NavBar;
