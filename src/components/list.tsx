import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Post, FeedListType } from "../store/list/types";
import { getSongList } from "../store/list/effects";
import { FalconRootState } from "../store/rootReducer";
import { filterUniqueVideos } from "../utils";

import Card from "./card";
import Button from "./button";

import { ChevronRight, ChevronLeft, Shuffle, Loader } from "react-feather";

interface VArrayProps {
  len: number;
}

const VArray = styled.div<VArrayProps>`
  grid-template-columns: repeat(${(props) => props.len}, 1fr);
`;

interface ListProps {
  title: string;
  type: FeedListType;
  redirect: boolean;
}

export const List = ({ title, type, redirect }: ListProps) => {
  let dispatch = useDispatch();
  let [scrollLeft, setScrollLeft] = React.useState(false);
  let [scrollRight, setScrollRight] = React.useState(true);
  let [videoList, setVideoList] = React.useState<Post[]>([]);
  let vList = useSelector((state: FalconRootState) => state.feed[type]);

  React.useEffect(() => {
    if (!vList.posts.length) {
      dispatch(getSongList(type, 0, 25));
    }
  }, [vList.posts.length, dispatch, type]);

  const hideArrows = (el: HTMLElement) => {
    if (el.scrollWidth <= el.clientWidth) {
      setScrollLeft(false);
      setScrollRight(false);
    } else {
      const scrollpp = (100 * el.scrollLeft) / (el.scrollWidth - el.clientWidth);
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
    }
  };

  React.useEffect(() => {
    const el = document.getElementById(title.trim());
    if (el) {
      el.addEventListener("scroll", ({ target }) => {
        if (target && target instanceof HTMLElement) {
          hideArrows(target);
        }
      });

      window.addEventListener("resize", (_event) => {
        console.log(title.trim());
        hideArrows(el);
      });
    }
  }, [title]);

  React.useEffect(() => {
    const el = document.getElementById(title.trim());
    if (el) {
      hideArrows(el);
    }
  }, [title, videoList.length]);


  React.useEffect(() => {
    setVideoList(filterUniqueVideos(vList.posts).slice(0, 25));
  }, [vList, type]);

  return (
    <div className="list" key={title.trim()}>
      <div className="list-header">
        <h1 className="title">{title}</h1>
        <Button queue={videoList} shuffle className="shuffle">
          <Shuffle></Shuffle> Shuffle
        </Button>
      </div>
      {vList.posts.length === 0 ? (
        <VArray className="array" id={title.trim()} len={6}>
          {Array(6).map((_, Index) => (
            <div className="empty-card" key={`key_empty_card_${Index}`}>
              <Loader></Loader>
              <p>LOADING</p>
            </div>
          ))}
        </VArray>
      ) : (
        <VArray className="array" id={title.trim()} len={videoList.length}>
          {videoList.map((vid) => (
            <Card
              id={vid.id}
              key={vid.id + title.trim()}
              data={vid}
              queue={videoList}
              redirect={redirect}
              type={type}
            />
          ))}
        </VArray>
      )}
      <div className={"scroll left" + (scrollLeft ? "" : " hidden")}>
        <ChevronLeft
          onClick={() => {
            let el = document.getElementById(title.trim())!;
            el.scrollBy({
              top: 0,
              left: -el.offsetWidth * 0.75,
              behavior: "smooth",
            });
          }}
        ></ChevronLeft>
      </div>
      <div className={"scroll right " + (scrollRight ? "" : " hidden")}>
        <ChevronRight
          onClick={() => {
            let el = document.getElementById(title.trim())!;
            el.scrollBy({
              top: 0,
              left: el.offsetWidth * 0.75,
              behavior: "smooth",
            });
          }}
        ></ChevronRight>
      </div>
    </div>
  );
};
