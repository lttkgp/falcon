import React from 'react';
import { Heart } from 'react-feather';

type CardProps = {
  id: number;
  className: string;
};

export default function Card(props: CardProps) {
  let number = props.id;
  return (
    <div className={props.className}>
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

Card.defaultProps = {
  className: 'card',
};
