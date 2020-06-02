import React, { useEffect } from 'react';
import axios from 'axios';
import List from '../components/list.js';
import Header from '../components/header';

export default function Home(props: Object) {
  useEffect(() => {
    axios.get('https://api.lttkgp.com/v1/feed/latest?limit=20').then((data) => {
      console.log(data);
    });
  });

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
