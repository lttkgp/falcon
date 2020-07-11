import React from "react";
import moment from "moment";
import { Heart } from "react-feather";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinArtists } from "../utils";
import { setQueue } from "../store/queue/actions";
import { Post } from "../store/list/types";

type CardProps = {
  id: string;
  data: Post;
  queue: Post[];
  redirect: boolean;
  className?: string;
  onClick?: Function;
  gkey?: string;
  listName?: string;
};

export default function FeedCard(props: CardProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  const onCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    if (props.onClick !== undefined) {
      props.onClick();
    } else if (props.redirect === true) {
      dispatch(setQueue(props.queue));
      history.push("/video?=" + props.id);
    }
  };

  return (
    <div className={props.className} onClick={onCardClick}>
      <img
        src={"https://img.youtube.com/vi/" + props.id + "/mqdefault.jpg"}
        alt=""
      />
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
      {props.data.postdata ? (
        <div className="post-desc">
          <div className="post-d">{props.data.postdata.caption}</div>
          <div className="post-date">
            {moment(props.data.postdata.share_date).format(
              "D, MMM YYYY, h:mm a "
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

FeedCard.defaultProps = {
  className: "feed-card",
};
