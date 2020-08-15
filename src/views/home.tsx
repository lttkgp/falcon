import React from "react";
import { List } from "../components/list";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { FalconRootState } from "../store/rootReducer";
import { getSongList } from "../store/list/effects";
import { FeedListType } from "../store/list/types";

export const Home = () => {
  let dispatch = useDispatch();
  let { frequent, latest, popular, underrated } = useSelector((state: FalconRootState) => state.feed);

  React.useEffect(() => {
    if (!latest.posts.length) {
      dispatch(getSongList(FeedListType.latest, 0, 25));
    }
  }, [latest.posts.length, dispatch]);

  React.useEffect(() => {
    if (!popular.posts.length) {
      dispatch(getSongList(FeedListType.popular, 0, 25));
    }
  }, [popular.posts.length, dispatch]);

  React.useEffect(() => {
    if (!underrated.posts.length) {
      dispatch(getSongList(FeedListType.underrated, 0, 25));
    }
  }, [underrated.posts.length, dispatch]);

  React.useEffect(() => {
    if (!frequent.posts.length) {
      dispatch(getSongList(FeedListType.frequent, 0, 25));
    }
  }, [frequent.posts.length, dispatch]);

  return (
    <div className="home">
      <Header title="Home" />

      <List title="Latest 🔥" type={FeedListType.latest} redirect />
      <List title="KGP's picks 🏅" type={FeedListType.popular} redirect />
      <List title="Underrated gems 👌" type={FeedListType.underrated} redirect />
      <List title="Frequently Shared 🎵" type={FeedListType.frequent} redirect />
    </div>
  );
};
