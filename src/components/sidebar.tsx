import React from "react";
import { NavLink } from "react-router-dom";

import { useSidebarOpen } from "../utils";
import ConfigModal from "./configModal";
import * as Icon from "react-feather";

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useSidebarOpen();

  return (
    <div className={`sidebar ${sidebarOpen ? "" : "short"}`}>
      <div className="logo">
        <div className="drawer" onClick={toggleSidebar}>
          {sidebarOpen ? <Icon.ChevronsLeft /> : <Icon.ChevronsRight />}
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

      <ConfigModal />
    </div>
  );
}
