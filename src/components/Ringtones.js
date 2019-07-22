import React from "react";
import "./App.css";
import "./Tab.css";
import "./Ringtones.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import playIcon from "../icons/play_gray.svg";

class Ringtone extends React.Component {
  render() {
    const value = this.props.value;
    const isSelected = this.props.isSelected;
    if (isSelected) {
      return (
        <div className="tabpanel-table-unit">
          <div className="selected-circle" />
          <div className="ring-tone-name">Ring tone {value}</div>
          <div className="play-circle">
            <img src={playIcon} alt="play" className="img-in-circle" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="tabpanel-table-unit">
          <div className="unselected-circle" />
          <div className="ring-tone-name">Ring tone {value}</div>
          <div className="play-circle">
            <img src={playIcon} alt="play" className="img-in-circle" />
          </div>
        </div>
      );
    }
  }
}
class Ringtones extends React.Component {
  render() {
    return (
      <div className="sub-content">
        <div className="sub-content-box">
          <div className="sub-content-title">RING TONE</div>
          <div className="sub-content-separation" />
          <Tabs selectedTabClassName="tab-selected">
            <TabList className="tablist">
              <Tab className="tab">WORK</Tab>
              <Tab className="tab">BREAK</Tab>
            </TabList>
            <TabPanel>
              <Ringtone value={1} isSelected={true} />
              <Ringtone value={2} isSelected={false} />
              <Ringtone value={3} isSelected={false} />
              <Ringtone value={4} isSelected={false} />
              <Ringtone value={5} isSelected={false} />
            </TabPanel>
            <TabPanel>
              <Ringtone value={6} isSelected={true} />
              <Ringtone value={7} isSelected={false} />
              <Ringtone value={8} isSelected={false} />
              <Ringtone value={9} isSelected={false} />
              <Ringtone value={10} isSelected={false} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Ringtones;
