import React, { useState } from 'react';
import * as Icon from 'react-feather';

import { NavLink } from 'react-router-dom';
type SidebarProps = {
  expand: Boolean;
  changeExpand: Function;
}; /* could also use interface */
// const App = ({ message }: AppProps) => <div>{message}</div>;
export default function Sidebar(props: SidebarProps) {
  return (
    <div className={'sidebar' + (props.expand ? '' : ' short')}>
      <div className='logo'>
        <div
          className='drawer'
          onClick={() => {
            props.changeExpand();
          }}
        >
          <Icon.Menu />
        </div>
        <span className='text'>LTTKGP</span>
      </div>
      <div className='menu'>
        <NavLink exact={true} to='/' className='link'>
          <Icon.Home></Icon.Home> <span className='text'>HOME</span>
        </NavLink>
        <NavLink to='/feed' className='link'>
          <Icon.Layers></Icon.Layers> <span className='text'>FEED</span>
        </NavLink>
        <NavLink to='/genre' className='link'>
          <Icon.Music></Icon.Music> <span className='text'>GENRES</span>
        </NavLink>
      </div>
    </div>
  );
}
