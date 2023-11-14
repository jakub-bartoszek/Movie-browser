import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchPeopleSearchResults,
  fetchPopularPeople,
  setPeople,
} from "../redux/peopleSlice";
import { getPopularPeople } from "./getPopularPeople";
import { getPeopleSearchResults } from "./getPeopleSearchResults";

function* fetchPopularPeopleHandler() {
  try {
    const people = yield call(getPopularPeople);
    yield put(setPeople(people));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* fetchPeopleSearchResultsHandler(searchQuery) {
  try {
    const people = yield call(getPeopleSearchResults, searchQuery.payload);

    yield put(setPeople(people));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* peopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(
    fetchPeopleSearchResults.type,
    fetchPeopleSearchResultsHandler
  );
}
