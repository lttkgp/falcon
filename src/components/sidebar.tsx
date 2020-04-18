import React, { useState } from 'react';
import * as Icon from 'react-feather';

import { NavLink } from 'react-router-dom';

export default function Sidebar(props: Object) {
  let [expand, changeExpand] = useState(true);
  return (
    <div className={'sidebar' + (expand ? '' : ' short')}>
      <div className='logo'>
        <div
          className='drawer'
          onClick={() => {
            changeExpand(!expand);
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
