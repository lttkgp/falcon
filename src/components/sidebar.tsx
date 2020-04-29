import React from 'react';
import * as Icon from 'react-feather';

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  let changeExpand = () => {
    if (document !== undefined) {
      let el = document.querySelector('.content');

      if (el?.classList !== null) {
        console.log(el?.classList);
        if (el?.classList.contains('expand')) {
          el?.classList.add('contract');
          el?.classList.remove('expand');
        } else {
          el?.classList.add('expand');
          el?.classList.remove('contract');
        }
      }

      let sideb = document.querySelector('.sidebar');
      if (sideb !== null)
        if (sideb?.classList.contains('short')) {
          sideb.classList.remove('short');
        } else {
          sideb.classList.add('short');
        }
    }
  };

  let changeTheme = () => {
    if (document !== undefined) {
      let el = document.querySelector('html');

      if (el?.classList !== null) {
        console.log(el?.classList);
        if (el?.classList.contains('light')) {
          el?.classList.add('dark');
          el?.classList.remove('light');
        } else {
          el?.classList.add('light');
          el?.classList.remove('dark');
        }
      }
    }
  };
  return (
    <div className='sidebar'>
      <div className='logo'>
        <div className='drawer' onClick={changeExpand}>
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
        <div className='change-theme' onClick={changeTheme}>
          Theme Change !!!!
        </div>
      </div>
    </div>
  );
}
