import { QueueAction } from "./action.types";
import { Post } from "../list/types";

export const setQueue = (list: Post[]): QueueAction => {
  return {
    type: "new queue",
    payload: list,
  };
};
