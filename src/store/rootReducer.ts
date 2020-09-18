import { combineReducers } from "redux";

import { feedReducer } from "./list/reducer";
import { queueReducer } from "./queue/reducer";

export const rootReducer = combineReducers({
  feed: feedReducer,
  queue: queueReducer,
});
export type FalconRootState = ReturnType<typeof rootReducer>;
