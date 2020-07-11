import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQueue } from "../store/queue/actions";
import shuffle from "../utils/knuth-shuffle";

export default function Button(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  let nqueue = props.queue;
  if (props.shuffle === true) {
    nqueue = shuffle(Array.from(props.queue));
  }

  return (
    <div
      className={props.className + " button"}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        } else {
          dispatch(setQueue(nqueue));
          history.push("/video?=" + nqueue[0].id);
        }
      }}
    >
      {props.children}
    </div>
  );
}
