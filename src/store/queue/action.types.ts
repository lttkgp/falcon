import { FeedListType, Post } from "../list/types";

export type QueueAction = {
  type: string;
  payload: {
    type: FeedListType;
    posts: Post[];
  };
};
