import { put, call, takeEvery, delay } from "redux-saga/effects";
import {
  fetchPopularPeople,
  fetchSearchResults,
  setPeople,
  setStatus,
} from "../redux/peopleSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { setPage, setTotalPages } from "../redux/searchSlice";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getPopular, payload.category, payload.page);
    yield put(setPage(data.page));
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setPeople(data.results));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchSearchResultsHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(
      getSearchResults,
      payload.searchQuery,
      payload.category,
      payload.page
    );
    yield put(setPage(data.page));
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setPeople(data.results));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
}
