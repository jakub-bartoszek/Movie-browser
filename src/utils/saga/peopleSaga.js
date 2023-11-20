import { put, call, takeEvery, delay } from "redux-saga/effects";
import {
  fetchPopularPeople,
  fetchSearchResults,
  setPeople,
  setStatus,
} from "../redux/peopleSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const people = yield call(getPopular, payload.category);
    yield put(setPeople(people));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchSearchResultsHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const people = yield call(
      getSearchResults,
      payload.searchQuery,
      payload.category
    );
    yield put(setPeople(people));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
}
