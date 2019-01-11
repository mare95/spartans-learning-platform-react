import { combineReducers } from "redux";
import authReducers from "./auth";
import homeReducers from "./home";

export const makeRootReducer = () =>
  combineReducers({
    auth: authReducers,
    home: homeReducers,
  });

export default makeRootReducer;
