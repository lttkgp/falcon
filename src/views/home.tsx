import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/list.js';
import Header from '../components/header';

export default function Home(props: Object) {
  let [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    axios.get('https://api.lttkgp.com/v1/feed/latest').then((resp) => {
      if (resp.data) {
        setList(resp.data.posts);
      }
    });
  }, []);

  return (
    <div className='home'>
      <Header title='Home' />

      <List title="KGP's picks 🔥" data={list} redirect />
      <List title='Top Weekly 🏅' data={list} redirect />
      <List title='Most Played Songs 🎵' data={list} redirect />
      <List title="Editor's Pick 👌" data={list} redirect />
    </div>
  );
}
