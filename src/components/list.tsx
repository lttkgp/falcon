import React, { useState } from 'react';
import Card from './card';
import { ChevronRight, ChevronLeft } from 'react-feather';

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];

type ListProps = {
  title: string;
};

export default function List(props: ListProps) {
  let [scrollLeft, setScrollLeft] = useState(false);
  let [scrollRight, setScrollRight] = useState(true);

  let hideArrows = (idname: string) => {
    setInterval(() => {
      let el = document.getElementById(idname);
      let scrollpp =
        (100 * el?.scrollLeft!) / (el?.scrollWidth! - el?.clientWidth!);
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

  return (
    <div className='list'>
      <h1 className='title'>{props.title}</h1>
      <div className='array' id={props.title.trim()}>
        {dummyData.map((num) => (
          <Card id={num} key={num + 'IDHJH'} />
        ))}
      </div>
      <div className={'scroll left' + (scrollLeft ? '' : ' hidden')}>
        <ChevronLeft
          onClick={() => {
            let el = document.getElementById(props.title.trim());
            el?.scrollBy({
              top: 0,
              left: -el.offsetWidth * 0.75,
              behavior: 'smooth',
            });
            hideArrows(props.title);
            setScrollLeft(true);
          }}
        ></ChevronLeft>
      </div>
      <div className={'scroll right ' + (scrollRight ? '' : ' hidden')}>
        <ChevronRight
          onClick={() => {
            let el = document.getElementById(props.title.trim());
            el?.scrollBy({
              top: 0,
              left: el.offsetWidth * 0.75,
              behavior: 'smooth',
            });
            setScrollRight(true);
            hideArrows(props.title);
          }}
        ></ChevronRight>
      </div>
    </div>
  );
}
