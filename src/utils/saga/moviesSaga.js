import { put, call, takeLatest, delay, } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchSearchResults,
  setGenres,
  setMovies,
  setMovieDetails,
  fetchMovieDetails,
  setStatus,
  fetchCredits,
  setMovieCredits,

} from "../redux/moviesSlice";
import { getPopular } from './getPopular';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';
import { getMoviesDetails } from './getMovieDetails';
import { getCredits } from './getCredits';

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
export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(setStatus("loading"))
    yield delay(1000);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
};

export function* fetchCreditsHandler({ payload: movieId }) {
  try {
    yield delay(1000);
    const credits = yield call(getCredits, movieId);
    console.log("Credits from API:", credits);
    yield put(setMovieCredits(credits));
  } catch (error) {
    yield put(setStatus("error"));
  }
};


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
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
