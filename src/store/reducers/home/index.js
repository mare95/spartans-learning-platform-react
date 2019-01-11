import { combineReducers } from "redux";
import createNewFeedReducer from "./feed/createNewFeed";
import getFullFeedReducer from "./feed/getFullFeed";
// Combine All Home Reducers
export default combineReducers({
  feed: createNewFeedReducer,
  allFeeds: getFullFeedReducer
});