import { Reducer } from "redux";
import { FeedListType } from "../list/types";

import { QueueAction } from "./action.types";
import { QUEUE_ADD, QUEUE_RESET } from "./constants";
import { QueueState } from "./types";

let initialQueueState: QueueState = {
  // TODO: Find a better way to represent no type state
  // (Although this gets overwritten in the first update)
  type: FeedListType.latest,
  posts: [],
};

export const queueReducer: Reducer<QueueState, QueueAction> = (state = initialQueueState, action): QueueState => {
  switch (action.type) {
    case QUEUE_ADD:
      return { type: action.payload.type, posts: [...state.posts, ...action.payload.posts] };
    case QUEUE_RESET:
      return { type: action.payload.type, posts: action.payload.posts };
    default:
      return state;
  }
};
