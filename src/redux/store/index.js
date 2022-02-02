import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { allReducers } from "../reducer";
// membuat store
const composeEnhancers =
  (typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;
export const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
