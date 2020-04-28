import { combineReducers } from 'redux';
import queueReducer from './queueReducer';

export const allReducers = combineReducers({ queue: queueReducer });
