import React from "react";
import ConfigModal from "./configModal";

export default function Header(props: { title: string }) {
  return (
    <div className="header">
      <div className="toolbar">
        <h1>{props.title}</h1>
        <ConfigModal />
      </div>
    </div>
  );
}
