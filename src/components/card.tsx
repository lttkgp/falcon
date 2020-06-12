import React from 'react';
import { Heart } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { joinArtists } from '../utils';

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
        image: string;
      };
      artists: [
        {
          name: string;
          image: string;
        }
      ];
      genre: [string];
    };
    link: string;
    id: string;
    post_count: number;
    postdata: {
      caption: string;
      share_date: string;
      permalink_url: string;
      likes_count: number;
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
          history.push('/video?=' + props.id);
        }
      }}
    >
      <img
        src={'https://img.youtube.com/vi/' + props.id + '/mqdefault.jpg'}
        alt=''
      />
      <div className='desc'>
        <div className='text'>
          <h1>{props.data.metadata.song.name}</h1>
          <p>{joinArtists(props.data.metadata.artists)}</p>
        </div>
        <div className='like'>
          <Heart></Heart>
          <p>{props.data.postdata.likes_count}</p>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  className: 'card',
};
