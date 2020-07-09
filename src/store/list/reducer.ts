import { FeedState } from "./types";
import { Reducer } from "redux";
import { FetchListActionTypes } from "./action.types";
import { FETCH_LATEST } from "./constants";

const initialFeedState: FeedState = {
  latest: {
    total: 0,
    next: "",
    posts: [],
  },
  frequent: {
    total: 0,
    next: "",
    posts: [],
  },
};

export const feedReducer: Reducer<FeedState, FetchListActionTypes> = (
  state = initialFeedState,
  action
): FeedState => {
  switch (action.type) {
    case FETCH_LATEST.LOADING:
    case FETCH_LATEST.FAILURE:
      return { ...state };
    case FETCH_LATEST.SUCCESS:
      return {
        ...state,
        latest: {
          total: action.feed.total,
          next: action.feed.next,
          posts: [...state.latest.posts, ...action.feed.posts],
        },
      };
    default:
      return state;
  }
};
