import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { createBrowserHistory } from "history";

import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/Reducer";
import { Router } from "react-router-dom";

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router history={history}>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
