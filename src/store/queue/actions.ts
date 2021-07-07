import { QueueAction } from "./action.types";
import { FeedListType, Post } from "../list/types";

export const setQueue = (list: Post[], type: FeedListType): QueueAction => {
  return {
    type: "new queue",
    payload: { type, posts: list },
  };
};
