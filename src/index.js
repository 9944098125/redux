import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import loanReducer from "./store/loanReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    reducer,
    loanReducer,
  }),
  applyMiddleware(thunk)
);
/* Here we create store for managing the state */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
