import React from "react";

import { FeedListType } from "../store/list/types";

import { List } from "../components/list";
import Header from "../components/header";

export const Home = () => {
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
