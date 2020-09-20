import React from "react";

import underDev from "../images/Dev.svg";

export const Genre = () => {
  return (
    <div className="genre-page">
      <h1>Genre</h1>
      <img src={underDev} alt="" />
      <h2>Under Development</h2>
      <p>
        Head to <a target="_blank" rel="noopener noreferrer" href="https://github.com/lttkgp/">our Github Organisation to contribute!</a>
      </p>
      <p>
        We discuss the development at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/listentothiskgp/shared_invite/zt-hig5iqx1-6RnYvxpuXdh3jz7mnHfoDQ">
          our Slack workspace
        </a>
      </p>
    </div>
  );
};
