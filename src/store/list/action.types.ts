import { Action } from "redux";
import { FETCH_LATEST, FETCH_FREQUENT } from "./constants";
import { FeedResponse } from "./types";

export interface FetchLatestLoading extends Action {
  type: typeof FETCH_LATEST.LOADING;
}

export interface FetchLatestSuccess extends Action {
  type: typeof FETCH_LATEST.SUCCESS;
  feed: FeedResponse;
}

export interface FetchLatestFailure extends Action {
  type: typeof FETCH_LATEST.FAILURE;
  error: Error;
}

export interface FetchFrequentLoading extends Action {
  type: typeof FETCH_FREQUENT.LOADING;
}

export interface FetchFrequentSuccess extends Action {
  type: typeof FETCH_FREQUENT.SUCCESS;
  feed: FeedResponse;
}

export interface FetchFrequentFailure extends Action {
  type: typeof FETCH_FREQUENT.FAILURE;
  error: Error;
}

type FetchLatestActionTypes =
  | FetchLatestLoading
  | FetchLatestSuccess
  | FetchLatestFailure;
type FetchFrequentActionTypes =
  | FetchFrequentLoading
  | FetchFrequentSuccess
  | FetchFrequentFailure;

export type FetchListActionTypes =
  | FetchLatestActionTypes
  | FetchFrequentActionTypes;
