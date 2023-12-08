import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

/**
 * This reducer stores the search results.
 * Saga functions can use this to set the search results.
 * Components can use this to get a list of search results.
 * It also accepts a CLEAR_SEARCH_RESULTS action to clear the search results.
 * @type {import('redux').Reducer<any[]>}
 * @param {any[]} state The current state of the reducer
 * @param {Object} action The action to dispatch/put
 * @param {("SET_SEARCH_RESULTS"|"CLEAR_SEARCH_RESULTS")} action.type The type of the action to dispatch
 * @param {any[]} action.payload The payload of the action to dispatch
 * @returns {any[]} The new state of the reducer
 */
const searchResults = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.payload;
    case "CLEAR_SEARCH_RESULTS":
      return [];
    default:
      return state;
  }
};

/**
 * @typedef {Object} Category
 * @property {number} id The ID of the category
 * @property {string} name The name of the category
 */

/**
 * This reducer stores the catories.
 * Saga functions can use this to set the categories.
 * Components can use this to get a list of categories.
 * @type {import('redux').Reducer<Category[]>}
 * @param {Category[]} state The current state of the reducer
 * @param {Object} action The action to dispatch/put
 * @param {("SET_CATEGORIES")} action.type The type of the action to dispatch
 * @param {Category[]} action.payload The payload of the action to dispatch
 * @returns {Category[]} The new state of the reducer
 */
const categories = (state = [], action) => {
  if (action.type === "SET_CATEGORIES") {
    return action.payload;
  }
  return state;
};

/**
 * @typedef {Object} Favorite
 * @property {number} id The ID of the favorite
 * @property {string} giphy_id The Giphy ID of the favorite
 * @property {number} category_id The ID of the category the favorite is in
 */

/**
 * This reducer stores the favorites.
 * Saga functions can use this to set the favorites.
 * Components can use this to get a list of favorites.
 * @type {import('redux').Reducer<Favorite[]>}
 * @param {Favorite[]} state The current state of the reducer
 * @param {Object} action The action to dispatch/put
 * @param {("SET_FAVORITES")} action.type The type of the action to dispatch
 * @param {Favorite[]} action.payload The payload of the action to dispatch
 * @returns {Favorite[]} The new state of the reducer
 */
const favorites = (state = [], action) => {
  if (action.type === "SET_FAVORITES") {
    return action.payload;
  }
  return state;
};

// Create saga middleware
const saga = createSagaMiddleware();

// Create one store that all components can use
const store = createStore(
  combineReducers({
    searchResults,
    categories,
    favorites,
  }),
  applyMiddleware(logger, saga),
);

// Pass rootSaga into our saga middleware
saga.run(rootSaga);

export default store;
