import { Dispatch } from "redux";
import {
  fetchLatestLoading,
  fetchLatestSucces,
  fetchLatestFailure,
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
