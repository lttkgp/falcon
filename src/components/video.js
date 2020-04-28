import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import * as Icon from 'react-feather';
import Card from './card';

// type VideoProps = {
//   title: string,
//   url: string,
//   id: string,
// };

const sampleData = {
  title: 'Rick Astley - Never Gonna Give You Up (Video)',
  author: 'Official Rick Astley',
  yid: 'dQw4w9WgXcQ',
  spotify: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC',
  likes: 27,
  genres: ['soul', 'pop'],
  queue: [
    'zReP_EYZGEw',
    'dQw4w9WgXcQ',
    'PJWemSzExXs',
    'k4V3Mo61fJM',
    'e-ORhEE9VVg',
    '2hlT8CqZ2pA',
    'U0V1y2p1sgs',
  ],
};

export default function Video(props) {
  let preQueue;
  if (props.queue) {
    preQueue = props.queue;
  } else {
    preQueue = sampleData.queue;
  }
  let [queue, changeQueue] = useState([
    props.id || sampleData.yid,
    ...preQueue,
  ]);

  useEffect(() => {
    if (document !== undefined) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, []);

  return (
    <div className='video'>
      <div className='video-container'>
        <YouTube
          videoId={queue[0]}
          onEnd={() => {
            if (queue.length > 0) {
              changeQueue(queue.slice(1));
            }
          }}
          opts={{
            height: '550',
            width: '900',
            playerVars: {
              autoplay: 1,
            },
          }}
        />

        <div className='desc'>
          <div
            className='prev_song control_button'
            onClick={() => {
              changeQueue(queue.slice(1));
            }}
          >
            <Icon.ChevronLeft />
          </div>
          <div className='text'>
            <h1 className='title'>{sampleData.title}</h1>
            <h2>{sampleData.author}</h2>
          </div>

          <div className='widgets'>
            <div className='icons'>
              <a
                href={'https://www.youtube.com/watch?v=' + sampleData.yid}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon.Youtube></Icon.Youtube>
              </a>
              <a
                href={sampleData.spotify}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon.Speaker></Icon.Speaker>
              </a>
              <a href='#link'>
                <Icon.Link2></Icon.Link2>
              </a>
              <span className='likes' target='_blank' rel='noopener noreferrer'>
                <Icon.Heart></Icon.Heart>
                <span>{sampleData.likes}</span>
              </span>
            </div>

            <div className='genres'>
              {sampleData.genres.map((genre) => {
                return (
                  <a
                    className='genre-tag'
                    key={'genre-tag-' + genre + sampleData.yid}
                    href='#genres'
                  >
                    {genre}
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className='next_song control_button'
            onClick={() => {
              changeQueue(queue.slice(1));
            }}
          >
            <Icon.ChevronRight />
          </div>
        </div>
      </div>

      <div className='queue'>
        <h1 className='title'>Up next</h1>
        {queue.slice(1).map((id) => (
          <Card
            id={id}
            key={id + sampleData.yid}
            className='queueCard'
            redirect={false}
            onClick={() => {
              changeQueue(
                queue.slice(
                  queue.findIndex((item) => {
                    return id === item;
                  })
                )
              );
              props.history.push('video?=' + id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
