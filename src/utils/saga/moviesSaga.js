import { put, call, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { fetchPopularMovies, fetchSearchResults, setGenres, setMovies, setStatus, } from "../redux/moviesSlice";
import { getPopularMovies } from './getPopularMovies';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';

function* fetchPopularMoviesHandler() {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  }
  catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchSearchResultsHandler(searchQuery) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getSearchResults, searchQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  }
  catch (error) {
    yield put(setStatus("error"));
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
