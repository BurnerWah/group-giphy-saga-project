import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

/**
 * Saga function to pass the search query to the server
 * @param {Object} action The action being dispatched
 * @param {"SAGA/SEARCH"} action.type The type of the action
 * @param {string} action.payload The search query
 * @see {@link https://github.com/axios/axios#request-config Axios request config}
 * @see {@link https://developers.giphy.com/docs/api/endpoint/#search Giphy Search Endpoint}
 */
function* search(action) {
  try {
    // Send the search query to the server
    const response = yield axios.get("/api/search", {
      // Using the "params" option here appends the query string
      params: { q: action.payload },
    });
    // Dispatch the results to the searchResults reducer
    yield put({ type: "SET_SEARCH_RESULTS", payload: response.data });
  } catch (error) {
    console.log("Error with search request:", error);
  }
}

/**
 * Saga function to get the categories from the server
 */
function* getCategories() {
  try {
    // Get the categories from the server
    const response = yield axios.get("/api/categories");
    // Dispatch the results to the categories reducer
    yield put({ type: "SET_CATEGORIES", payload: response.data });
  } catch (error) {
    console.log("Error with categories request:", error);
  }
}

/**
 * Saga function to get the favorites from the server
 */
function* getFavorites() {
  try {
    // Get the favorites from the server
    const response = yield axios.get("/api/favorites");
    // Dispatch the results to the favorites reducer
    yield put({ type: "SET_FAVORITES", payload: response.data });
  } catch (error) {
    console.log("Error with favorites request:", error);
  }
}

/**
 * Add a favorite gif to the database
 * @param {Object} action The action being dispatched
 * @param {"SAGA/ADD_FAVORITE"} action.type The type of the action
 * @param {string} action.payload The Giphy ID of the favorite
 */
function* addFavorite(action) {
  try {
    // Send the Giphy ID to the server
    yield axios.post("/api/favorites", { id: action.payload });
    // Refresh the favorites list
    yield put({ type: "SAGA/GET_FAVORITES" });
  } catch (error) {
    console.log("Error with add favorite request:", error);
  }
}

/**
 * Sets the category of a favorite gif in the database
 * @param {Object} action The action being dispatched
 * @param {"SAGA/SET_CATEGORY"} action.type The type of the action
 * @param {Object} action.payload The payload of the action
 * @param {number} action.payload.id The internal ID of the favorite
 * @param {number} action.payload.category The ID of the category
 */
function* setCategory(action) {
  try {
    // Send the category ID to the server's PUT /api/favorites/:id route
    yield axios.put(`/api/favorites/${action.payload.id}`, {
      category: action.payload.category,
    });
    // Refresh the favorites list
    yield put({ type: "SAGA/GET_FAVORITES" });
  } catch (error) {
    console.log("Error with set category request:", error);
  }
}

/**
 * Root saga function
 */
export default function* rootSaga() {
  yield takeLatest("SAGA/SEARCH", search);
  yield takeLatest("SAGA/GET_CATEGORIES", getCategories);
  yield takeLatest("SAGA/GET_FAVORITES", getFavorites);
  yield takeLatest("SAGA/ADD_FAVORITE", addFavorite);
  yield takeLatest("SAGA/SET_CATEGORY", setCategory);
}
