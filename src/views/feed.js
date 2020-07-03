import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { filterUniqueVideos } from '../utils';
import FeedCard from '../components/feed-card';
import * as Icon from 'react-feather';
import Header from '../components/header';
import styled from 'styled-components';

const FArray = styled.div`
  grid-template-rows: repeat(${(props) => Math.ceil(props.len / 3)}, auto);
  @media (min-width: 577px) and (max-width: 1449px) {
    grid-template-rows: repeat(${(props) => Math.ceil(props.len / 2)}, auto);
  }
`;

export default function Feed() {
  let [videoList, setVideoList] = useState([]);
  let [lastLoaded, setLastLoaded] = useState(0);

  useEffect(() => {
    axios
      .get('https://api.lttkgp.com/v1/feed/latest?start=0&limit=50')
      .then((resp) => {
        if (resp.data) {
          setVideoList(filterUniqueVideos(resp.data.posts));
          setLastLoaded(50);
        }
      });
  }, []);

  let loadMore = () => {
    axios
      .get(
        'https://api.lttkgp.com/v1/feed/latest?start=' +
          lastLoaded +
          '&limit=50'
      )
      .then((resp) => {
        if (resp.data) {
          setVideoList([...videoList, ...filterUniqueVideos(resp.data.posts)]);
          setLastLoaded(lastLoaded + 50);
        }
      });
  };

  return (
    <div className='feed'>
      <Header title='Feed' />
      {videoList.length === 0 ? (
        <div className='loading'>
          <Icon.Loader />
          <h2>Loading</h2>
        </div>
      ) : (
        ''
      )}
      <FArray className='feed-list' len={videoList.length}>
        {videoList.map((vid) => (
          <FeedCard
            id={vid.id}
            key={vid.id + 'feedX'}
            data={vid}
            queue={videoList}
            redirect
          />
        ))}
      </FArray>
      <div className='load-more' onClick={loadMore}>
        <Icon.DownloadCloud /> Load More
      </div>
    </div>
  );
}
