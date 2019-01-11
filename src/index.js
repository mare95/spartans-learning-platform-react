import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from "react-redux";
import createStore from "./store";
const store = createStore(window.__INITIAL_STATE__);
const MOUNT_NODE = document.getElementById("root");

let render = async () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router store={store} />
    </Provider>,
    MOUNT_NODE
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Enable HMR
if (process.env.NODE_ENV === "development") {
    if (module.hot) {
      const renderApp = render;
      render = () => {
        try {
          renderApp();
        } catch (e) {
          console.error(e); // eslint-disable-line
        }
      };
      module.hot.accept(["./Router"], () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE);
          render();
        })
      );
    }
  }
