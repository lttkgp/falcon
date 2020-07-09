import { Post } from "../list/types";

export type QueueAction = {
  type: string;
  payload: Post[];
};
