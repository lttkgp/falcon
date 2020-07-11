import React from "react";
import { List } from "../components/list";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { FalconRootState } from "../store/rootReducer";
import { getSongList } from "../store/list/effects";
import { FeedListType } from "../store/list/types";

export const Home = () => {
  let dispatch = useDispatch();
  let { frequent, latest } = useSelector(
    (state: FalconRootState) => state.feed
  );

  React.useEffect(() => {
    if (!frequent.posts.length) {
      dispatch(getSongList(FeedListType.frequent, 0, 25));
    }
  }, [frequent.posts.length, dispatch]);

  React.useEffect(() => {
    if (!latest.posts.length) {
      dispatch(getSongList(FeedListType.latest, 0, 25));
    }
  }, [latest.posts.length, dispatch]);

  return (
    <div className="home">
      <Header title="Home" />

      <List title="Latest 🔥" type={FeedListType.latest} redirect />
      <List title="KGP's picks 🏅" type={FeedListType.frequent} redirect />
      <List title="Editor's Pick 👌" type={FeedListType.frequent} redirect />
      <List title="Most Played Songs 🎵" type={FeedListType.latest} redirect />
    </div>
  );
};
