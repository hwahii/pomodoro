import React from 'react';
import listRedIcon from '../icons/list_red.svg';
import listWhiteIcon from '../icons/list_white.svg';

function ListRedIcon(props) {
	return <img src={listRedIcon} alt="list" />;
}
function ListWhiteIcon(props) {
	return <img src={listWhiteIcon} alt="list" />;
}
class ListIcon extends React.Component {
	render() {
		const activeIcon = this.props.activeIcon;
		if (activeIcon === 'List') {
			return <ListRedIcon />;
		} else {
			return <ListWhiteIcon />;
		}
	}
}
export default ListIcon;
