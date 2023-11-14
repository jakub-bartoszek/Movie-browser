import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchMoviesSearchResults,
  setGenres,
  setMovies,
} from "../redux/moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getMoviesSearchResults } from "./getMoviesSearchResults";
import { getGenres } from "./getGenres";

function* fetchPopularMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* fetchMoviesSearchResultsHandler(searchMovieQuery) {
  try {
    const movies = yield call(getMoviesSearchResults, searchMovieQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(
    fetchMoviesSearchResults.type,
    fetchMoviesSearchResultsHandler
  );
}
