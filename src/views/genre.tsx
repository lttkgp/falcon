import React from "react";

import underDev from "../images/under-dev.png";

export const Genre = () => {
  return (
    <div className="genre-page">
      <h1>Genre</h1>
      <img src={underDev} alt="" />
      <h2>Under Development</h2>
      <p>
        Head to <a href="https://github.com/lttkgp/">our Github Organisation to contribute!</a>
      </p>
      <p>
        We discuss the development at{" "}
        <a href="https://join.slack.com/t/listentothiskgp/shared_invite/zt-fnw7qgoz-may2PvJTg78aUctgr6DOGg">
          our Slack workspace
        </a>
      </p>
    </div>
  );
};
