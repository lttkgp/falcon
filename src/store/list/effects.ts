import { Dispatch } from "redux";
import {
  fetchLatestLoading,
  fetchLatestSucces,
  fetchLatestFailure,
  fetchFrequentLoading,
  fetchFrequentSuccess,
} from "./actions";
import { feedService } from "../../services/feedService";

export const getLatestFeed = (start: number, limit: number) => (
  dispatch: Dispatch
) => {
  dispatch(fetchLatestLoading());

  feedService
    .getLatest(start, limit)
    .then((latestResponse) => dispatch(fetchLatestSucces(latestResponse.data)))
    .catch((error) => dispatch(fetchLatestFailure(error)));
};

export const getFrequentFeed = (start: number, limit: number) => (
  dispatch: Dispatch
) => {
  dispatch(fetchFrequentLoading());

  feedService
    .getFrequent(start, limit)
    .then((frequentResponse) =>
      dispatch(fetchFrequentSuccess(frequentResponse.data))
    )
    .catch((error) => dispatch(fetchLatestFailure(error)));
};
