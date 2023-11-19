import { put, call, takeLatest, delay } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchSearchResults,
  setGenres,
  setMovies,
  setStatus,
} from "../redux/moviesSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { getGenres } from "./getGenres";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getPopular, payload.category);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchSearchResultsHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(
      getSearchResults,
      payload.searchQuery,
      payload.category
    );
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
