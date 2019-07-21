import React from "react";
import ringtoneRedIcon from "../icons/ringtone_red.svg";
import ringtoneWhiteIcon from "../icons/ringtone_white.svg";

function RingtoneRedIcon(props) {
  return <img src={ringtoneRedIcon} alt="ringtones" />;
}
function RingtoneWhiteIcon(props) {
  return <img src={ringtoneWhiteIcon} alt="ringtones" />;
}
class RingtonesIcon extends React.Component {
  render() {
    const activeIcon = this.props.activeIcon;
    if (activeIcon === "Ringtones") {
      return <RingtoneRedIcon />;
    } else {
      return <RingtoneWhiteIcon />;
    }
  }
}
export default RingtonesIcon;
