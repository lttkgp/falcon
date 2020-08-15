import React from "react";
import Card from "./card";
import { ChevronRight, ChevronLeft } from "react-feather";
import styled from "styled-components";
import * as Icon from "react-feather";
import { filterUniqueVideos } from "../utils";
import Button from "./button";
import { Post, FeedListType } from "../store/list/types";
import { useSelector } from "react-redux";
import { FalconRootState } from "../store/rootReducer";

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
  let [scrollLeft, setScrollLeft] = React.useState(false);
  let [scrollRight, setScrollRight] = React.useState(true);
  let [videoList, setVideoList] = React.useState<Post[]>([]);
  let { frequent, latest, popular, underrated } = useSelector((state: FalconRootState) => state.feed);

  let hideArrows = (idname: string) => {
    setInterval(() => {
      let el = document.getElementById(idname);
      if (el) {
        let scrollpp = (100 * el.scrollLeft) / (el.scrollWidth - el.clientWidth);
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
    }, 1000);
  };

  React.useEffect(() => {
    hideArrows(title);
  }, [title]);

  React.useEffect(() => {
    if (type === FeedListType.frequent) setVideoList(filterUniqueVideos(frequent.posts).slice(0, 25));
  }, [frequent.posts, type]);

  React.useEffect(() => {
    if (type === FeedListType.latest) setVideoList(filterUniqueVideos(latest.posts).slice(0, 25));
  }, [latest.posts, type]);

  React.useEffect(() => {
    if (type === FeedListType.popular) setVideoList(filterUniqueVideos(popular.posts).slice(0, 25));
  }, [popular.posts, type]);

  React.useEffect(() => {
    if (type === FeedListType.underrated) setVideoList(filterUniqueVideos(underrated.posts).slice(0, 25));
  }, [underrated.posts, type]);

  return (
    <div className="list" key={title.trim()}>
      <div className="list-header">
        <h1 className="title">{title}</h1>
        <Button queue={videoList} shuffle className="shuffle">
          <Icon.Shuffle></Icon.Shuffle> Shuffle
        </Button>
      </div>
      <VArray className="array" id={title.trim()} len={videoList.length}>
        {videoList.map((vid) => (
          <Card id={vid.id} key={vid.id + title.trim()} data={vid} queue={videoList} redirect={redirect} />
        ))}
      </VArray>
      <div className={"scroll left" + (scrollLeft ? "" : " hidden")}>
        <ChevronLeft
          onClick={() => {
            let el = document.getElementById(title.trim())!;
            el.scrollBy({
              top: 0,
              left: -el.offsetWidth * 0.75,
              behavior: "smooth",
            });
            setScrollLeft(true);
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
            setScrollRight(true);
          }}
        ></ChevronRight>
      </div>
    </div>
  );
};
