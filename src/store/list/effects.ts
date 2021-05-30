import { Dispatch } from "redux";

import { fetchListLoading, fetchListSuccess, fetchListFailure } from "./actions";
import { feedService } from "../../services/feedService";
import { FeedListType } from "./types";

const getList = (listType: FeedListType) => {
  switch (listType) {
    case "frequent":
      return feedService.getFrequent;
    case "latest":
      return feedService.getLatest;
    case "popular":
      return feedService.getPopular;
    case "underrated":
      return feedService.getUnderrated;
    default:
      return () => new Promise<any>((resolve) => resolve(""));
  }
};

export const getSongList = (listType: FeedListType, start: number, limit: number) => (dispatch: Dispatch) => {
  dispatch(fetchListLoading(listType));

  getList(listType)(start, limit)
    .then((response) => dispatch(fetchListSuccess(listType, response.data)))
    .catch((error) => dispatch(fetchListFailure(listType, error)));
};
