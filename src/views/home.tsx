import React from 'react';
import List from '../components/list.js';

export default function Home(props: Object) {
  return (
    <div className='home'>
      <h1 className='header'>Home</h1>
      <List title="KGP's picks 🔥" redirect />
      <List title='Top Weekly 🏅' redirect />
      <List title='Most Played Songs 🎵' redirect />
      <List title="Editor's Pick 👌" redirect />
    </div>
  );
}
