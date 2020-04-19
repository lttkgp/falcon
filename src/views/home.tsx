import React from 'react';
import List from '../components/list';

export default function Home(props: Object) {
  return (
    <div className='home'>
      <h1 className='header'>Home</h1>
      <List title="KGP's picks 🔥" />
      <List title='Top Weekly 🏅' />
      <List title='Most Played Songs 🎵' />
      <List title="Editor's Pick 👌" />
    </div>
  );
}
