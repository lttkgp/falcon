import React from 'react';
import List from '../components/list.js';

export default function Home(props: Object) {
  return (
    <div className='home'>
      <h1 className='header'>Home</h1>
      <List />
      <List />
      <List />
    </div>
  );
}
