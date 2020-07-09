import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Icon from "react-feather";

import { filterUniqueVideos } from "../utils";
import FeedCard from "../components/feed-card";
import Header from "../components/header";
import { getLatestFeed } from "../store/list/effects";
import { FalconRootState } from "../store/rootReducer";
import { Post } from "../store/list/types";

interface FArrayProps {
  readonly len: number;
}

const FArray = styled.div<FArrayProps>`
  grid-template-rows: repeat(${(props) => Math.ceil(props.len / 3)}, auto);
  @media (min-width: 577px) and (max-width: 1449px) {
    grid-template-rows: repeat(${(props) => Math.ceil(props.len / 2)}, auto);
  }
`;

export default function Feed() {
  const feedLimit = 50;
  let [videoList, setVideoList] = React.useState<Post[]>([]);
  let [lastLoaded, setLastLoaded] = React.useState(0);
  let dispatch = useDispatch();
  let { latest } = useSelector((state: FalconRootState) => state.feed);

  React.useEffect(() => {
    if (!latest.posts.length) {
      dispatch(getLatestFeed(0, feedLimit));
    }
  }, [latest, dispatch]);

  React.useEffect(() => {
    setVideoList(filterUniqueVideos(latest.posts));
    setLastLoaded((l) => l + 50);
  }, [latest]);

  let loadMore = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(getLatestFeed(lastLoaded, feedLimit));
  };

  return (
    <div className="feed">
      <Header title="Feed" />
      {videoList.length === 0 ? (
        <div className="loading">
          <Icon.Loader />
          <h2>Loading</h2>
        </div>
      ) : (
        ""
      )}
      <FArray className="feed-list" len={videoList.length}>
        {videoList.map((vid) => (
          <FeedCard
            id={vid.id}
            key={vid.id + "feedX"}
            data={vid}
            queue={videoList}
            redirect
          />
        ))}
      </FArray>
      <div className="load-more" onClick={loadMore}>
        <Icon.DownloadCloud /> Load More
      </div>
    </div>
  );
}
