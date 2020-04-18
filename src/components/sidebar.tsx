import React from 'react';
import * as Icon from 'react-feather';

export default function Sidebar(props: Object) {
  return (
    <div className='sidebar'>
      <div className='logo'>LTTKGP</div>
      <div className='menu'>
        <a href='#home' className='link'>
          <Icon.Home></Icon.Home> Home
        </a>
        <a href='#feed' className='link'>
          <Icon.Layers></Icon.Layers> Feed
        </a>
        <a href='#genre' className='link'>
          <Icon.Music></Icon.Music> Genres
        </a>
      </div>
    </div>
  );
}
