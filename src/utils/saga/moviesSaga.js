import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPopularMovies, fetchSearchResults, setGenres, setMovies, } from "../redux/moviesSlice";
import { getPopularMovies } from './getPopularMovies';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';

function* fetchPopularMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  }
  catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* fetchSearchResultsHandler(searchQuery) {
  try {
    const movies = yield call(getSearchResults, searchQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  }
  catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
}
