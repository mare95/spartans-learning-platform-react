import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

const createStore = (initialState = {}) => {
  let middleware;
  if (process.env.NODE_ENV === "development") {
    middleware = [thunk, logger];
  } else {
    middleware = [thunk];
  }
  const enhancers = [];
  let composeEnhancers = compose;
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createReduxStore(
    reducers(), // root reducers
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  store.asyncReducers = {};

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      /* eslint-disable */
      const nextRootReducer = require("./reducers").default;
      /* eslint-enable */
      store.replaceReducer(nextRootReducer);
    });
    return store;
  }
  return store;
};

export default createStore;
