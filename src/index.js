import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./App";
import postsReducers from "./reducers/postsReducers";
import usersReducers from "./reducers/authReducers";

const store = configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
