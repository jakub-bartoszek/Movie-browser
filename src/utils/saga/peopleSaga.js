import { put, call, delay, takeLatest } from "redux-saga/effects";
import {
  setStatus,
  setTotalPages,
} from "../redux/dataSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { getPersonDetails } from "./getPersonDetails";
import { getPersonCredits } from "./getPersonCredits";
import { fetchPeopleSearchResults, fetchPersonCredits, fetchPersonDetails, fetchPopularPeople, setPeople, setPersonCredits, setPersonDetails } from "../redux/peopleSlice";

function* fetchPersonCreditsHandler({ payload: personId }) {
  try {
    yield put(setStatus("loading"));
    const credits = yield call(getPersonCredits, personId);
    yield put(setPersonCredits(credits));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getPopular, payload.category, payload.page);
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setPeople(data.results));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fethPersonDetailsHandler({ payload: personId }) {
  try {
    yield put(setStatus("loading"));
    const personDetails = yield call(getPersonDetails, personId);
    yield put(setPersonDetails(personDetails));
    yield delay(1000);
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
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setPeople(data.results));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPeopleSearchResults.type, fetchSearchResultsHandler);
  yield takeLatest(fetchPersonDetails.type, fethPersonDetailsHandler);
  yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
}
