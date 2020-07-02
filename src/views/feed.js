import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { filterUniqueVideos } from '../utils';
import FeedCard from '../components/feed-card';
import styled from 'styled-components';

const FArray = styled.div`
  grid-template-rows: repeat(${(props) => Math.ceil(props.len / 3)}, 1fr);
`;

export default function Feed() {
  let [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.lttkgp.com/v1/feed/latest?start=0&limit=50')
      .then((resp) => {
        if (resp.data) {
          setVideoList(filterUniqueVideos(resp.data.posts));
        }
      });
  }, []);

  return (
    <div className='feed'>
      <h1>Feed</h1>
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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
        nisi, tempora debitis in dolorem porro laboriosam quaerat vero
        blanditiis rem voluptates omnis odit et architecto sint aliquid quisquam
        at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit
        quaerat amet facilis fugit ipsam corrupti reiciendis vitae laboriosam ab
        dolore quis nihil ut modi, corporis voluptatum aspernatur consectetur
        officiis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
        nisi, tempora debitis in dolorem porro laboriosam quaerat vero
        blanditiis rem voluptates omnis odit et architecto sint aliquid quisquam
        at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit
        quaerat amet facilis fugit ipsam corrupti reiciendis vitae laboriosam ab
        dolore quis nihil ut modi, corporis voluptatum aspernatur consectetur
        officiis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
        nisi, tempora debitis in dolorem porro laboriosam quaerat vero
        blanditiis rem voluptates omnis odit et architecto sint aliquid quisquam
        at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit
        quaerat amet facilis fugit ipsam corrupti reiciendis vitae laboriosam ab
        dolore quis nihil ut modi, corporis voluptatum aspernatur consectetur
        officiis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
        nisi, tempora debitis in dolorem porro laboriosam quaerat vero
        blanditiis rem voluptates omnis odit et architecto sint aliquid quisquam
        at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit
        quaerat amet facilis fugit ipsam corrupti reiciendis vitae laboriosam ab
        dolore quis nihil ut modi, corporis voluptatum aspernatur consectetur
        officiis?
      </p>
    </div>
  );
}
