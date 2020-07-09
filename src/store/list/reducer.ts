import { FeedState, FeedListType } from "./types";
import { Reducer } from "redux";
import { FetchListActionTypes } from "./action.types";
import { FETCH_LIST } from "./constants";

const initialFeedState: FeedState = {
  latest: {
    total: 0,
    next: "",
    posts: [],
    isLoading: false,
  },
  frequent: {
    total: 0,
    next: "",
    posts: [],
    isLoading: false,
  },
};

// TODO: Reducer code should be simplified with lodash + immer
export const feedReducer: Reducer<FeedState, FetchListActionTypes> = (
  state = initialFeedState,
  action
): FeedState => {
  switch (action.type) {
    case FETCH_LIST.LOADING:
      return {
        ...state,
        frequent: {
          ...state.frequent,
          isLoading: action.listType === FeedListType.frequent && true,
        },
        latest: {
          ...state.latest,
          isLoading: action.listType === FeedListType.latest && true,
        },
      };
    case FETCH_LIST.SUCCESS:
      return {
        ...state,
        frequent:
          action.listType === FeedListType.frequent
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.frequent.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.frequent },
        latest:
          action.listType === FeedListType.latest
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.latest.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.latest },
      };
    case FETCH_LIST.FAILURE:
      return { ...state };
    default:
      return state;
  }
};
