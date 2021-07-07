import { FeedListType, Post } from "../list/types";

export interface QueueState {
  type: FeedListType;
  posts: Post[];
}
