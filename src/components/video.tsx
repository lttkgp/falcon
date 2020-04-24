import React from 'react';
import YouTube from 'react-youtube';
import * as Icon from 'react-feather';
type VideoProps = {
  title: string;
  url: string;
};

const sampleData = {
  title: 'Rick Astley - Never Gonna Give You Up (Video)',
  author: 'Official Rick Astley',
  yid: 'dQw4w9WgXcQ',
  spotify: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC',
  likes: 27,
  genres: ['soul', 'pop'],
};

export default function Video(props: VideoProps) {
  return (
    <div className='video'>
      <div className='video-container'>
        <YouTube
          videoId={sampleData.yid}
          opts={{
            height: '550',
            width: '900',
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
              <div className='likes'>
                <Icon.Heart></Icon.Heart>
                <span>{sampleData.likes}</span>
              </div>
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
    </div>
  );
}
