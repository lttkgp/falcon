import { Dispatch } from "redux";
import {
  fetchListLoading,
  fetchListSuccess,
  fetchListFailure,
} from "./actions";
import { feedService } from "../../services/feedService";
import { FeedListType, FeedResponse } from "./types";
import { AxiosResponse } from "axios";

const getList = (listType: FeedListType) => {
  switch (listType) {
    case "frequent":
      return feedService.getFrequent;
    case "latest":
      return feedService.getLatest;
    default:
      return () =>
        new Promise<AxiosResponse<FeedResponse>>((resolve) => resolve());
  }
};

export const getSongList = (
  listType: FeedListType,
  start: number,
  limit: number
) => (dispatch: Dispatch) => {
  dispatch(fetchListLoading(listType));

  getList(listType)(start, limit)
    .then((latestResponse) =>
      dispatch(fetchListSuccess(listType, latestResponse.data))
    )
    .catch((error) => dispatch(fetchListFailure(listType, error)));
};
