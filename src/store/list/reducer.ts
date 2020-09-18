import { FeedState } from "./types";
import { Reducer } from "redux";
import { FetchListActionTypes } from "./action.types";
import { FETCH_LIST } from "./constants";

const initialFeedState: FeedState = {
  latest: { total: 0, next: "", posts: [], isLoading: false },
  popular: { total: 0, next: "", posts: [], isLoading: false },
  underrated: { total: 0, next: "", posts: [], isLoading: false },
  frequent: { total: 0, next: "", posts: [], isLoading: false },
};

// TODO: Reducer code should be simplified with lodash + immer
export const feedReducer: Reducer<FeedState, FetchListActionTypes> = (state = initialFeedState, action): FeedState => {
  switch (action.type) {
    case FETCH_LIST.LOADING:
      return {
        ...state,
        [action.listType]: {
          ...state[action.listType],
          isLoading: true,
        },
      };
    case FETCH_LIST.SUCCESS:
      return {
        ...state,
        [action.listType]: {
          total: action.feed.total,
          next: action.feed.next,
          posts: [...state[action.listType].posts, ...action.feed.posts],
          isLoading: false,
        },
      };
    case FETCH_LIST.FAILURE:
      return { ...state };
    default:
      return state;
  }
};
