import React, { useState } from "react";
import * as Icon from "react-feather";
import { changeTheme } from "../utils";

export default function ConfigModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = (e: any) => {
    setModalOpen(() => !modalOpen);
  };
  return (
    <div className="configModal-wrapper">
      <div className="sidebar-button" onClick={toggle}>
        <Icon.Menu className="sidebar-icon"></Icon.Menu>
      </div>
      <div className={`configModal ${modalOpen ? "open" : "close"}`}>
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
          <Icon.Info></Icon.Info>
          About LTTKGP
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
          <Icon.GitHub></Icon.GitHub>
          Code @ Github
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
          <Icon.Slack></Icon.Slack>
          Join us on Slack
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
          <Icon.Facebook></Icon.Facebook>
          Facebook Group
        </a>
        <hr />
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link">
          <Icon.CheckCircle />
          Posts are up to date.
        </a>
        <div className="theme-switcher" onClick={changeTheme}>
          <div className="sidebar-button">
            <div className="sidebar-icon change-theme-icon"></div>
          </div>
          <div>SWITCH THEME</div>
        </div>
        <div className="sidebar-button close-icon">
          <Icon.X className="sidebar-icon" onClick={toggle}></Icon.X>
        </div>
      </div>
    </div>
  );
}
