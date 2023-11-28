import { put, call, takeEvery, delay, takeLatest } from "redux-saga/effects";
import {
  fetchPopularPeople,
  fetchSearchResults,
  setPeople,
  setStatus,
  setPersonDetails,
  fetchPersonDetails,
  setCreditsForPerson,
  fetchCreditsForPerson,
} from "../redux/peopleSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { getPersonDetails } from "./getPersonDetails";
import { getCreditsForPerson } from "./getCreditsForPerson"

function* fetchCreditsForPersonHandler({ payload: personId }) {
  try {
    yield put(setStatus("loading"));
    const personCredits = yield call(getCreditsForPerson, personId)
    yield put(setCreditsForPerson(personCredits));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
};


function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const people = yield call(getPopular, payload.category);
    yield put(setPeople(people));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
};

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
};

function* fetchSearchResultsHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const people = yield call(
      getSearchResults,
      payload.searchQuery,
      payload.category
    );
    yield put(setPeople(people));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
  yield takeLatest(fetchPersonDetails.type, fethPersonDetailsHandler);
  yield takeEvery(fetchCreditsForPerson.type, fetchCreditsForPersonHandler);
}
