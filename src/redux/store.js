import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { takeLatest, put } from "redux-saga/effects";

const searchResults = (state = [], action) => {
  if (action.type === "SET_SEARCH_RESULTS") {
    return action.payload;
  }
  return state;
};

const getFavorites = (state = [], action) => {
  if (action.type === "GET_FAVORITES") {
    return action.payload;
  }
  return state;
};

const saga = createSagaMiddleware();

const store = createStore(
  combineReducers({
    searchResults,
    getFavorites,
  }),
  applyMiddleware(logger, saga),
);

saga.run(rootSaga);

export default store;
