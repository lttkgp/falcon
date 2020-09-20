import { FETCH_LIST } from "./constants";

import { FeedResponse, FeedListType } from "./types";
import { FetchListLoading, FetchListSuccess, FetchListFailure } from "./action.types";

export const fetchListLoading = (listType: FeedListType): FetchListLoading => ({
  type: FETCH_LIST.LOADING,
  listType,
});

export const fetchListSuccess = (listType: FeedListType, feed: FeedResponse): FetchListSuccess => ({
  type: FETCH_LIST.SUCCESS,
  listType,
  feed,
});

export const fetchListFailure = (listType: FeedListType, error: Error): FetchListFailure => ({
  type: FETCH_LIST.FAILURE,
  listType,
  error,
});
