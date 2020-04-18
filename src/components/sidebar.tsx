import React from 'react';
import * as Icon from 'react-feather';

export default function Sidebar(props: Object) {
  return (
    <div className='sidebar'>
      <div className='logo'>LTTKGP</div>
      <div className='menu'>
        <a href='#home' className='link'>
          <Icon.Home></Icon.Home> <span className='text'>HOME</span>
        </a>
        <a href='#feed' className='link'>
          <Icon.Layers></Icon.Layers> <span className='text'>FEED</span>
        </a>
        <a href='#genre' className='link'>
          <Icon.Music></Icon.Music> <span className='text'>GENRES</span>
        </a>
      </div>
    </div>
  );
}
