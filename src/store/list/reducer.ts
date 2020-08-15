import { FeedState, FeedListType } from "./types";
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
        latest: {
          ...state.latest,
          isLoading: action.listType === FeedListType.latest && true,
        },
        popular: {
          ...state.popular,
          isLoading: action.listType === FeedListType.popular && true,
        },
        underrated: {
          ...state.underrated,
          isLoading: action.listType === FeedListType.underrated && true,
        },
        frequent: {
          ...state.frequent,
          isLoading: action.listType === FeedListType.frequent && true,
        },
      };
    case FETCH_LIST.SUCCESS:
      return {
        ...state,
        latest:
          action.listType === FeedListType.latest
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.latest.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.latest },
        popular:
          action.listType === FeedListType.popular
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.popular.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.popular },
        underrated:
          action.listType === FeedListType.underrated
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.underrated.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.underrated },
        frequent:
          action.listType === FeedListType.frequent
            ? {
                total: action.feed.total,
                next: action.feed.next,
                posts: [...state.frequent.posts, ...action.feed.posts],
                isLoading: false,
              }
            : { ...state.frequent },
      };
    case FETCH_LIST.FAILURE:
      return { ...state };
    default:
      return state;
  }
};
