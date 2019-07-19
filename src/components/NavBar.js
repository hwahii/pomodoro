import React from "react";
import "./App.css";
import addRedIcon from "../icons/add_red.svg";
// import addWhiteIcon from "../icons/add_white.svg";
// import listRedIcon from "../icons/list_red.svg";
import listWhiteIcon from "../icons/list_white.svg";
// import analysisRedIcon from "../icons/analysis_red.svg";
import analysisWhiteIcon from "../icons/analysis_white.svg";
// import ringtoneRedIcon from "../icons/ringtone_red.svg";
import ringtoneWhiteIcon from "../icons/ringtone_white.svg";
import arrowIcon from "../icons/arrow.svg";
import TomatoSmallColor from '../icons/tomato_small_color.svg';

const NavBar = () => (
  <div className="sub-nav">
    <nav className="nav">
      <ul>
        <li>
          <img src={addRedIcon} alt="add" />
        </li>
        <li>
          <img src={listWhiteIcon} alt="list" />
        </li>
        <li>
          <img src={analysisWhiteIcon} alt="analytics" />
        </li>
        <li>
          <img src={ringtoneWhiteIcon} alt="ringtones" />
        </li>
      </ul>
      <div className="toggle-tag">
        <img src={TomatoSmallColor} alt="tomatoSmallColor"></img>
        <div className="arrow">
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
