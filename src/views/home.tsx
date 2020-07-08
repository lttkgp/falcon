import React from "react";
import { List } from "../components/list";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { FalconRootState } from "../store/rootReducer";
import { getFrequentFeed, getLatestFeed } from "../store/list/effects";

export const Home = () => {
  let dispatch = useDispatch();
  let { frequent, latest } = useSelector(
    (state: FalconRootState) => state.feed
  );
  console.log(frequent, latest);
  React.useEffect(() => {
    if (!frequent.posts.length) {
      dispatch(getFrequentFeed(0, 25));
    }
    if (!latest.posts.length) {
      dispatch(getLatestFeed(0, 25));
    }
  }, [frequent, latest, dispatch]);

  return (
    <div className="home">
      <Header title="Home" />

      <List title="Latest 🔥" type="latest" redirect />
      <List title="KGP's picks 🏅" type="frequent" redirect />
      <List title="Editor's Pick 👌" type="frequent" redirect />
      <List title="Most Played Songs 🎵" type="latest" redirect />
    </div>
  );
};
