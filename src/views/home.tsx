import React from 'react';
import List from '../components/list.js';
import Header from '../components/header';

export default function Home(props: Object) {
  return (
    <div className='home'>
      <Header title='Home' />

      <List title="KGP's picks 🔥" redirect />
      <List title='Top Weekly 🏅' redirect />
      <List title='Most Played Songs 🎵' redirect />
      <List title="Editor's Pick 👌" redirect />
    </div>
  );
}
