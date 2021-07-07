import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { joinArtists } from "../utils";
import { setQueue } from "../store/queue/actions";
import { FeedListType, Post } from "../store/list/types";

import { Heart } from "react-feather";

type CardProps = {
  id: string;
  data: Post;
  queue: Post[];
  redirect: boolean;
  className?: string;
  onClick?: Function;
  gkey?: string;
  listName?: string;
  type: FeedListType;
};

export default function Card(props: CardProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      className={props.className}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        } else if (props.redirect === true) {
          dispatch(setQueue(props.queue, props.type));
          history.push("/video?=" + props.id);
        }
      }}
    >
      <img src={"https://img.youtube.com/vi/" + props.id + "/mqdefault.jpg"} alt="" />
      <div className="desc">
        <div className="text">
          {props.data.metadata ? (
            <div className="di">
              <h1>{props.data.metadata.song.name}</h1>
              <p>{joinArtists(props.data.metadata.artists)}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="like">
          <Heart></Heart>
          {props.data.postdata ? <p>{props.data.postdata.likes_count}</p> : ""}
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  className: "card",
};
