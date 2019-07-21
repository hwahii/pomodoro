import React from "react";
import addRedIcon from "../icons/add_red.svg";
import addWhiteIcon from "../icons/add_white.svg";

function AddRedIcon(props) {
  return <img src={addRedIcon} alt="add" />;
}
function AddWhiteIcon(props) {
  return <img src={addWhiteIcon} alt="add" />;
}
class AddIcon extends React.Component {
  render() {
    const activeIcon = this.props.activeIcon;
    if (activeIcon === "Add") {
      return <AddRedIcon />;
    } else {
      return <AddWhiteIcon />;
    }
  }
}
export default AddIcon;
