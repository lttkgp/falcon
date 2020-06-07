import React from 'react';
import { Heart } from 'react-feather';
import { useHistory } from 'react-router-dom';

type CardProps = {
  className: string;
  onClick: Function;
  redirect: boolean;
  id: string;
  gkey: string;
  data: {
    metadata: {
      song: {
        name: string;
      };
    };
  };
};

export default function Card(props: CardProps) {
  const history = useHistory();

  return (
    <div
      className={props.className}
      key={props.gkey}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        } else if (props.redirect === true) {
          history.push('/video?=' + props.id.split('/').slice(-1).pop());
        }
      }}
    >
      <img
        src={
          'https://img.youtube.com/vi/' +
          props.id.split('/').slice(-1).pop() +
          '/mqdefault.jpg'
        }
        alt=''
      />
      <div className='desc'>
        <div className='text'>
          <h1>{props.data.metadata.song.name}</h1>
          <p>{props.id}</p>
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
