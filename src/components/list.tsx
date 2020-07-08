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
  let { frequent, latest } = useSelector(
    (state: FalconRootState) => state.feed
  );

  React.useEffect(() => {
    switch (type) {
      case "frequent":
        setVideoList(filterUniqueVideos(frequent.posts));
        break;
      case "latest":
        setVideoList(filterUniqueVideos(latest.posts));
        break;
      default:
        setVideoList([]);
    }
  }, [type, frequent, latest]);

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
          <Card
            id={vid.id}
            key={vid.id + title.trim()}
            data={vid}
            queue={videoList}
            redirect={redirect}
          />
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
