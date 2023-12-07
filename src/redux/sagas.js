import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* search(action) {
  try {
    const response = yield axios.get("/api/search", {
      params: { q: action.payload },
    });
    yield put({ type: "SET_SEARCH_RESULTS", payload: response.data });
  } catch (error) {
    console.log("Error with search request:", error);
  }
}

function* getCategories() {
  try {
    const response = yield axios.get("/api/categories");
    yield put({ type: "SET_CATEGORIES", payload: response.data });
  } catch (error) {
    console.log("Error with categories request:", error);
  }
}

function* getFavorites() {
  try {
    const response = yield axios.get("/api/favorites");
    yield put({ type: "SET_FAVORITES", payload: response.data });
  } catch (error) {
    console.log("Error with favorites request:", error);
  }
}

function* addFavorite(action) {
  try {
    yield axios.post("/api/favorites", { id: action.payload });
    yield put({ type: "SAGA/GET_FAVORITES" });
  } catch (error) {
    console.log("Error with add favorite request:", error);
  }
}

export default function* rootSaga() {
  yield takeLatest("SAGA/SEARCH", search);
  yield takeLatest("SAGA/GET_CATEGORIES", getCategories);
  yield takeLatest("SAGA/GET_FAVORITES", getFavorites);
  yield takeLatest("SAGA/ADD_FAVORITE", addFavorite);
}
