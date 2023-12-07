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

export default function* rootSaga() {
  yield takeLatest("SAGA/SEARCH", search);
}
