import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const searchResults = (state = [], action) => {
  if (action.type === "SET_SEARCH_RESULTS") {
    return action.payload;
  }
  return state;
};

const categories = (state = [], action) => {
  if (action.type === "SET_CATEGORIES") {
    return action.payload;
  }
  return state;
};

const favorites = (state = [], action) => {
  if (action.type === "SET_FAVORITES") {
    return action.payload;
  }
  return state;
};

const saga = createSagaMiddleware();

const store = createStore(
  combineReducers({
    searchResults,
    categories,
    favorites,
  }),
  applyMiddleware(logger, saga),
);

saga.run(rootSaga);

export default store;
