import { combineReducers } from "redux";
import userLoginReducer from "./login/userLoginReducer";
// Combine All Auth Reducers
export default combineReducers({
  login: userLoginReducer
});
