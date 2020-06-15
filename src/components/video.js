import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import * as Icon from 'react-feather';
import Card from './card';
import { useSelector } from 'react-redux';
import { mobileCheck } from '../utils/video';
import { joinArtists } from '../utils';
import { filterGenres } from '../utils/filterList';

export default function Video(props) {
  let preQueue = useSelector((state) => state.queue);
  let [queue, changeQueue] = useState(preQueue);

  if (preQueue.length === 0) {
    console.log(window.location.host);
    if (window !== undefined) {
      var home = window.location.protocol + '//' + window.location.host;
      if (window.history.pushState) {
        window.history.pushState({ path: home }, '', home);
      }
    }
  }

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

  let [currentIndex, changeIndex] = useState(
    (() => {
      if (props.id) {
        return preQueue.map((e) => e.id).indexOf(props.id);
      }
      return 0;
    })()
  );

  let handleModScroll = () => {
    if (mobileCheck() && window !== null) {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        let e = document.getElementsByClassName('desc')[0];
        if (prevScrollpos > currentScrollPos && e !== null) {
          e.classList.remove('hidden');
        } else {
          e.classList.add('hidden');
        }
        if (currentScrollPos === 0) {
          e.classList.add('large');
          e.classList.remove('hidden');
        } else {
          e.classList.remove('large');
        }
        prevScrollpos = currentScrollPos;
      };
    }
  };

  useEffect(() => {
    if (document !== undefined) {
      handleModScroll();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }, []);

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
      changeURLid(queue[currentIndex + 1].id);
      changeIndex(currentIndex + 1);
      scrollCurrentVideo();
    }
  };

  let playPrevVideo = () => {
    if (currentIndex > 0) {
      changeURLid(queue[currentIndex - 1].id);
      changeIndex(currentIndex - 1);
      scrollCurrentVideo();
    }
  };

  let handleEndOfVideo = () => {
    playNextVideo();
  };

  return (
    <div className={queue.length !== 0 ? 'video' : 'video fullview'}>
      <div className='video-container'>
        <YouTube
          videoId={queue.length !== 0 ? queue[currentIndex].id : props.id}
          onEnd={handleEndOfVideo}
          opts={{
            height: '550',
            width: '900',
            playerVars: {
              autoplay: 1,
              playsinline: 1,
            },
          }}
        />

        {queue.length !== 0 ? (
          <div className='desc large'>
            <div className='prev_song control_button' onClick={playPrevVideo}>
              <Icon.ChevronLeft />
            </div>
            <div className='middle'>
              <div className='text'>
                <h1 className='title'>
                  {queue[currentIndex].metadata.song.name}
                </h1>
                <h2>{joinArtists(queue[currentIndex].metadata.artists)}</h2>
              </div>

              <div className='widgets'>
                <div className='icons'>
                  <a
                    href={
                      'https://www.youtube.com/watch?v=' +
                      queue[currentIndex].id
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon.Youtube></Icon.Youtube>
                  </a>
                  {/*
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
                     */}
                  <span
                    className='likes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon.Heart></Icon.Heart>
                    <span>{queue[currentIndex].postdata.likes_count}</span>
                  </span>
                </div>

                <div className='genres'>
                  {filterGenres(queue[currentIndex].metadata.genre).map(
                    (genre) => {
                      return (
                        <div
                          className='genre-tag'
                          key={'genre-tag-' + genre + 'ssyid'}
                          href='#genres'
                        >
                          {genre}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            <div className='next_song control_button' onClick={playNextVideo}>
              <Icon.ChevronRight />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {queue.length !== 0 ? (
        <div className='queue'>
          <h1 className='title'>Queue</h1>
          {queue.map((vid, index) => {
            let selectClass = '';
            if (index === currentIndex) {
              selectClass = ' current';
            }
            return (
              <Card
                id={vid.id}
                key={vid.id + 'Queue-xyppu'}
                data={vid}
                className={'queueCard' + selectClass}
                redirect={false}
                onClick={() => {
                  changeURLid(vid.id);
                  changeIndex(index);
                }}
              />
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
