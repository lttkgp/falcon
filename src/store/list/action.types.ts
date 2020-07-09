import { Action } from "redux";
import { FETCH_LIST } from "./constants";
import { FeedResponse, FeedListType } from "./types";

export interface FetchListLoading extends Action {
  type: typeof FETCH_LIST.LOADING;
  listType: FeedListType;
}

export interface FetchListSuccess extends Action {
  type: typeof FETCH_LIST.SUCCESS;
  listType: FeedListType;
  feed: FeedResponse;
}

export interface FetchListFailure extends Action {
  type: typeof FETCH_LIST.FAILURE;
  listType: FeedListType;
  error: Error;
}

export type FetchListActionTypes =
  | FetchListLoading
  | FetchListSuccess
  | FetchListFailure;
