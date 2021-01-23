import React from "react";
import { NavLink } from "react-router-dom";
import { changeTheme } from "../utils";
import * as Icon from "react-feather";

// import { Search as SearchIcon } from "react-feather";

export default function Header(props: { title: string }) {
  return (
    <div className="header">
      <div className="toolbar">
        <h1>{props.title}</h1>
        {/* <div className='search-box'>
          <SearchIcon />
          <input type='text' id='search' placeholder='Search' />
        </div> */}
        <div className="change-theme">
          <NavLink to="/about" className="about-icon">
            <Icon.Info></Icon.Info>
          </NavLink>
        </div>
        
        <div className="change-theme" onClick={changeTheme}>
          <div className="icon-theme"></div>
        </div>
      </div>
    </div>
  );
}
