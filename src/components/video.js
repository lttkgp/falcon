import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import * as Icon from 'react-feather';
import Card from './card';
import { useSelector } from 'react-redux';

const sampleData = {
  title: 'Rick Astley - Never Gonna Give You Up (Video)',
  author: 'Official Rick Astley',
  yid: 'dQw4w9WgXcQ',
  spotify: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC',
  likes: 27,
  genres: ['soul', 'pop'],
  queue: [],
};

export default function Video(props) {
  let preQueue = useSelector((state) => state.queue);
  if (props.queue) {
    preQueue = props.queue;
  }
  let [queue, changeQueue] = useState([props.id || 'dQw4w9WgXcQ', ...preQueue]);

  let [currentIndex, changeIndex] = useState(0);

  useEffect(() => {
    if (document !== undefined) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, []);

  let changeURLid = (id) => {
    if (window !== undefined) {
      if (window.history.pushState) {
        var newurl =
          window.location.protocol +
          '//' +
          window.location.host +
          window.location.pathname +
          '?=' +
          id;
        window.history.pushState({ path: newurl }, '', newurl);
      }
    }
  };

  let scrollCurrentVideo = (offset = 0) => {
    setTimeout(() => {
      if (document !== undefined) {
        let el = document.querySelector('.current.queueCard');
        let Q = document.querySelector('.queue');
        if (el !== null && Q !== null) {
          const elementRect = el.getBoundingClientRect();
          const queueRect = Q.getBoundingClientRect();
          window.scrollTo(0, elementRect.top - queueRect.y + offset);
        }
      }
    }, 100);
  };

  let playNextVideo = () => {
    if (queue.length > 0 && currentIndex + 1 < queue.length) {
      changeURLid(queue[currentIndex + 1]);
      changeIndex(currentIndex + 1);
      scrollCurrentVideo();
    }
  };

  let playPrevVideo = () => {
    if (currentIndex > 0) {
      changeURLid(queue[currentIndex - 1]);
      changeIndex(currentIndex - 1);
      scrollCurrentVideo();
    }
  };

  let handleEndOfVideo = () => {
    playNextVideo();
  };

  return (
    <div className='video'>
      <div className='video-container'>
        <YouTube
          videoId={queue[currentIndex]}
          onEnd={handleEndOfVideo}
          opts={{
            height: '550',
            width: '900',
            playerVars: {
              autoplay: 1,
            },
          }}
        />

        <div className='desc'>
          <div className='prev_song control_button' onClick={playPrevVideo}>
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
          <div className='next_song control_button' onClick={playNextVideo}>
            <Icon.ChevronRight />
          </div>
        </div>
      </div>

      <div className='queue'>
        <h1 className='title'>Queue</h1>
        {queue.map((id, index) => {
          let selectClass = '';
          if (index === currentIndex) {
            selectClass = ' current';
          }
          return (
            <Card
              id={id}
              key={id + sampleData.yid}
              className={'queueCard' + selectClass}
              redirect={false}
              onClick={() => {
                changeURLid(id);
                changeIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
