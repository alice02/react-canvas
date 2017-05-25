import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from "./containers/App";
import rootReducer from "./reducers";

injectTapEventPlugin();

const initialState = {
  isFetching: false,
  locations: []
}
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
