import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as Icon from "react-feather";

import { filterUniqueVideos } from "../utils";
import FeedCard from "../components/feed-card";
import Header from "../components/header";
import { getSongList } from "../store/list/effects";
import { FalconRootState } from "../store/rootReducer";
import { Post, FeedListType } from "../store/list/types";

interface FArrayProps {
  readonly len: number;
}

const FArray = styled.div<FArrayProps>`
  grid-template-rows: repeat(${(props) => Math.ceil(props.len / 3)}, auto);
  @media (min-width: 577px) and (max-width: 1449px) {
    grid-template-rows: repeat(${(props) => Math.ceil(props.len / 2)}, auto);
  }
`;

export const Feed = () => {
  const feedLimit = 50;
  let [videoList, setVideoList] = React.useState<Post[]>([]);
  let dispatch = useDispatch();
  let { latest } = useSelector((state: FalconRootState) => state.feed);

  React.useEffect(() => {
    if (!latest.posts.length) {
      dispatch(getSongList(FeedListType.latest, 0, feedLimit));
    }
  }, [latest.posts.length, dispatch]);

  React.useEffect(() => {
    setVideoList(filterUniqueVideos(latest.posts));
  }, [latest.posts]);

  let loadMore = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(getSongList(FeedListType.latest, latest.posts.length, feedLimit));
  };

  return (
    <div className="feed">
      <Header title="Feed" />
      {videoList.length === 0 && latest.isLoading ? (
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
      {!latest.isLoading && (
        <div className="load-more" onClick={loadMore}>
          <Icon.DownloadCloud /> Load More
        </div>
      )}
      {videoList.length > 0 && latest.isLoading ? (
        <div className="loading">
          <Icon.Loader />
          <h2>Loading</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
