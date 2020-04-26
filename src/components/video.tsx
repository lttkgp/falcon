import React, { useState } from 'react';
import YouTube from 'react-youtube';
import * as Icon from 'react-feather';
import Card from './card';

type VideoProps = {
  title: string;
  url: string;
  id: string;
};

const sampleData = {
  title: 'Rick Astley - Never Gonna Give You Up (Video)',
  author: 'Official Rick Astley',
  yid: 'dQw4w9WgXcQ',
  spotify: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC',
  likes: 27,
  genres: ['soul', 'pop'],
  queue: [
    'tt2k8PGm-TI',
    'cH4E_t3m3xM',
    'e2vBLd5Egnk',
    'k4V3Mo61fJM',
    'e-ORhEE9VVg',
    '2hlT8CqZ2pA',
    'U0V1y2p1sgs',
  ],
};

export default function Video(props: VideoProps) {
  let [queue, changeQueue] = useState([
    props.id || sampleData.yid,
    ...sampleData.queue,
  ]);

  console.log(props.id);
  return (
    <div className='video'>
      <div className='video-container'>
        <YouTube
          videoId={queue[0]}
          onEnd={() => {
            if (queue.length > 1) {
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
          <div className='text'>
            <h1 className='title'>{sampleData.title}</h1>
            <h2>{sampleData.author}</h2>
          </div>

          <div className='widgets'>
            <div className='icons'>
              <a href={'https://www.youtube.com/watch?v=' + sampleData.yid}>
                <Icon.Youtube></Icon.Youtube>
              </a>
              <a href={sampleData.spotify}>
                <Icon.Speaker></Icon.Speaker>
              </a>
              <a href='#link'>
                <Icon.Link2></Icon.Link2>
              </a>
              <span className='likes'>
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
        </div>
      </div>

      <div className='queue'>
        <h1 className='title'>Up next</h1>
        {sampleData.queue.map((num) => (
          <Card id={num} key={num + sampleData.yid} className='queueCard' />
        ))}
      </div>
    </div>
  );
}
