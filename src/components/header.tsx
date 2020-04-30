import React from 'react';
import * as Icon from 'react-feather';
export default function Header(props: { title: string }) {
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
    <div className='header'>
      <h1>{props.title}</h1>
      <div className='toolbar'>
        <div className='search-box'>
          <Icon.Search />
          <input type='text' id='search' placeholder='Search' />
        </div>
        <div className='change-theme' onClick={changeTheme}>
          <div className='icon-theme'></div>
        </div>
      </div>
    </div>
  );
}
