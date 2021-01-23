import React from "react";
import { NavLink } from "react-router-dom";

import { changeTheme, changeExpand } from "../utils";

import * as Icon from "react-feather";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="drawer" onClick={changeExpand}>
          <Icon.Menu />
        </div>
        <span className="text">LTTKGP</span>
      </div>
      <div className="menu">
        <NavLink exact={true} to="/" className="link">
          <Icon.Home></Icon.Home> <span className="text">HOME</span>
        </NavLink>
        <NavLink to="/feed" className="link">
          <Icon.Layers></Icon.Layers> <span className="text">FEED</span>
        </NavLink>
        <NavLink to="/genre" className="link">
          <Icon.Music></Icon.Music> <span className="text">GENRES</span>
        </NavLink>
      </div>

      <div className="change-theme">
        <NavLink to="/about" className="about-icon">
          <Icon.Info size="32"></Icon.Info>
        </NavLink>
      </div>

      <div className="change-theme" onClick={changeTheme}>
        <div className="icon-theme"></div>
      </div>
    </div>
  );
}
