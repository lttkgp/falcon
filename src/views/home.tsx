import React from "react";
import List from "../components/list.js";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="home">
      <Header title="Home" />

      <List
        title="Latest 🔥"
        url="https://api.lttkgp.com/v1/feed/latest?start=0&limit=25&n=30"
        redirect
      />
      <List
        title="KGP's picks 🏅"
        url="https://api.lttkgp.com/v1/feed/frequent?start=0&limit=25&n=30"
        redirect
      />
      <List
        title="Editor's Pick 👌"
        url="https://api.lttkgp.com/v1/feed/latest?start=0&limit=25&n=30"
        redirect
      />
      <List
        title="Most Played Songs 🎵"
        url="https://api.lttkgp.com/v1/feed/frequent?start=0&limit=25&n=30"
        redirect
      />
    </div>
  );
}
