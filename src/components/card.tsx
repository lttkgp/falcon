import React from 'react';
import { Heart } from 'react-feather';

export default function Card(props: { id: number }) {
  let number = props.id;
  return (
    <div className='card'>
      <img src={'https://picsum.photos/seed/' + number + '/300/180'} alt='' />
      <div className='desc'>
        <div className='text'>
          <h1>The song of rain</h1>
          <p>Musically Artist</p>
        </div>
        <div className='like'>
          <Heart></Heart>
          <p>12</p>
        </div>
      </div>
    </div>
  );
}
