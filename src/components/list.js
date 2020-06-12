import React, { useState, useEffect } from 'react';
import Card from './card';
import { ChevronRight, ChevronLeft } from 'react-feather';
import styled from 'styled-components';
import axios from 'axios';

const VArray = styled.div`
  grid-template-columns: repeat(${(props) => props.len}, 1fr);
`;

export default function List(props) {
  let [scrollLeft, setScrollLeft] = useState(false);
  let [scrollRight, setScrollRight] = useState(true);
  let [videoList, setVideoList] = useState([]);

  let hideArrows = (idname) => {
    setInterval(() => {
      let el = document.getElementById(idname);
      let scrollpp =
        (100 * el?.scrollLeft) / (el?.scrollWidth - el?.clientWidth);
      if (scrollpp > 99) {
        setScrollRight(false);
        setScrollLeft(true);
      } else if (scrollpp < 1) {
        setScrollLeft(false);
        setScrollRight(true);
      } else {
        setScrollLeft(true);
        setScrollRight(true);
      }
    }, 1000);
  };

  useEffect(() => {
    hideArrows(props.title);
  }, [props.title]);

  useEffect(() => {
    axios.get(props.url).then((resp) => {
      if (resp.data) {
        setVideoList(resp.data.posts);
      }
    });
  }, []);

  return (
    <div className='list' key={props.title.trim()}>
      <h1 className='title'>{props.title}</h1>
      <VArray className='array' id={props.title.trim()} len={videoList.length}>
        {videoList.map((vid) => (
          <Card
            gkey={vid.id + 'IDHJH' + props.title.trim()}
            id={vid.id}
            data={vid}
            redirect={props.redirect}
          />
        ))}
      </VArray>
      <div className={'scroll left' + (scrollLeft ? '' : ' hidden')}>
        <ChevronLeft
          onClick={() => {
            let el = document.getElementById(props.title.trim());
            el.scrollBy({
              top: 0,
              left: -el.offsetWidth * 0.75,
              behavior: 'smooth',
            });
            setScrollLeft(true);
          }}
        ></ChevronLeft>
      </div>
      <div className={'scroll right ' + (scrollRight ? '' : ' hidden')}>
        <ChevronRight
          onClick={() => {
            let el = document.getElementById(props.title.trim());
            el.scrollBy({
              top: 0,
              left: el.offsetWidth * 0.75,
              behavior: 'smooth',
            });
            setScrollRight(true);
          }}
        ></ChevronRight>
      </div>
    </div>
  );
}
