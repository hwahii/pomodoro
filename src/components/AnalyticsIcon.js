import React from "react";
import analysisRedIcon from "../icons/analysis_red.svg";
import analysisWhiteIcon from "../icons/analysis_white.svg";

function AnalyticsRedIcon(props) {
  return <img src={analysisRedIcon} alt="analytics" />;
}
function AnalyticsWhiteIcon(props) {
  return <img src={analysisWhiteIcon} alt="analytics" />;
}
class AnalyticsIcon extends React.Component {
  render() {
    const activeIcon = this.props.activeIcon;
    if (activeIcon === "Analytics") {
      return <AnalyticsRedIcon />;
    } else {
      return <AnalyticsWhiteIcon />;
    }
  }
}
export default AnalyticsIcon;
