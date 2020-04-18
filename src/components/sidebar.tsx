import React from 'react';
import * as Icon from 'react-feather';

import { Link } from 'react-router-dom';

export default function Sidebar(props: Object) {
  return (
    <div className='sidebar'>
      <div className='logo'>LTTKGP</div>
      <div className='menu'>
        <Link to='/' className='link'>
          <Icon.Home></Icon.Home> <span className='text'>HOME</span>
        </Link>
        <Link to='/feed' className='link'>
          <Icon.Layers></Icon.Layers> <span className='text'>FEED</span>
        </Link>
        <Link to='/genre' className='link'>
          <Icon.Music></Icon.Music> <span className='text'>GENRES</span>
        </Link>
      </div>
    </div>
  );
}
