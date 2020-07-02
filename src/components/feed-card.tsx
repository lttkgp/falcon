import React from 'react';
import { Heart } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinArtists } from '../utils';
import { setQueue } from '../actions';

type VideoProps = {
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

type CardProps = {
  className: string;
  onClick: Function;
  redirect: boolean;
  id: string;
  gkey: string;
  data: VideoProps;
  queue: [VideoProps];
  listName: string;
};

export default function FeedCard(props: CardProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div
      className={props.className}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        } else if (props.redirect === true) {
          dispatch(setQueue(props.queue));
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
          {props.data.metadata ? (
            <div className='di'>
              <h1>{props.data.metadata.song.name}</h1>
              <p>{joinArtists(props.data.metadata.artists)}</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='like'>
          <Heart></Heart>
          {props.data.postdata ? <p>{props.data.postdata.likes_count}</p> : ''}
        </div>
      </div>
      {props.data.postdata ? (
        <div className='post-desc'>
          <div className='post-d'>{props.data.postdata.caption}</div>
          <div className='post-date'>{props.data.postdata.share_date}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

FeedCard.defaultProps = {
  className: 'feed-card',
};
