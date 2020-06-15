import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQueue } from '../actions';
import shuffle from '../utils/knuth-shuffle';

export default function Button(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div
      className={props.className + ' button'}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        } else {
          if (props.shuffle === true) {
            dispatch(setQueue(shuffle(props.queue)));
            history.push('/video?=' + props.queue[0].id);
          }
        }
      }}
    >
      {props.children}
    </div>
  );
}
