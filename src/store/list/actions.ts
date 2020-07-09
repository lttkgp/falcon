import { FETCH_LATEST, FETCH_FREQUENT } from "./constants";
import { FeedResponse } from "./types";
import {
  FetchLatestLoading,
  FetchLatestSuccess,
  FetchLatestFailure,
  FetchFrequentLoading,
  FetchFrequentSuccess,
  FetchFrequentFailure,
} from "./action.types";

export const fetchLatestLoading = (): FetchLatestLoading => ({
  type: FETCH_LATEST.LOADING,
});

export const fetchLatestSucces = (feed: FeedResponse): FetchLatestSuccess => ({
  type: FETCH_LATEST.SUCCESS,
  feed,
});

export const fetchLatestFailure = (error: Error): FetchLatestFailure => ({
  type: FETCH_LATEST.FAILURE,
  error,
});

export const fetchFrequentLoading = (): FetchFrequentLoading => ({
  type: FETCH_FREQUENT.LOADING,
});

export const fetchFrequentSuccess = (
  feed: FeedResponse
): FetchFrequentSuccess => ({
  type: FETCH_FREQUENT.SUCCESS,
  feed,
});

export const fetchFrequentFailure = (error: Error): FetchFrequentFailure => ({
  type: FETCH_FREQUENT.FAILURE,
  error,
});
