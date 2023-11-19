import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchPopularPeople,
  fetchSearchResults,
  setPeople,
} from "../redux/peopleSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    const people = yield call(getPopular, payload.category);
    yield put(setPeople(people));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* fetchSearchResultsHandler({ payload }) {
  console.log(payload);
  try {
    const people = yield call(getSearchResults, payload.searchQuery, payload.category);
    yield put(setPeople(people));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(
    fetchSearchResults.type,
    fetchSearchResultsHandler
  );
}
