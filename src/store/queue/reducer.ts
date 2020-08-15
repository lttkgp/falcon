import { QueueAction } from "./action.types";
import { QUEUE_ADD, QUEUE_RESET } from "./constants";
import { Reducer } from "redux";
import { QueueState } from "./types";

let initialQueueState: QueueState = {
  posts: [],
};

export const queueReducer: Reducer<QueueState, QueueAction> = (state = initialQueueState, action): QueueState => {
  switch (action.type) {
    case QUEUE_ADD:
      return { posts: [...state.posts, ...action.payload] };
    case QUEUE_RESET:
      return { posts: action.payload };
    default:
      return state;
  }
};
