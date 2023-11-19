import { delay, put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchPopularMovies,
  fetchSearchResults,
  setGenres,
  setMovies,
  setMovieDetails,
  fetchMovieDetails,
  setCredits,
} from "../redux/moviesSlice";
import { getPopularMovies } from './getPopularMovies';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';
import { getMoviesDetails } from './getMovieDetails';
import { getCredits } from './getCredits';

function* fetchPopularMoviesHandler() {
  try {
    const movies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  }
  catch (error) {
    console.error("Something went wrong!", error);
  }
}
export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield delay(700);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
  } catch (error) {
    yield put(alert("Something went wrong!"));
  }
};

export function* fetchCreditsHandler({ payload: movieId }) {
  try {
    yield delay(700);

    const credits = yield call(getCredits, movieId);
    yield put(setCredits(credits));
  } catch (error) {
    yield put(alert("Something went wrong!"));
  }
};


function* fetchSearchResultsHandler(searchQuery) {
  try {
    const movies = yield call(getSearchResults, searchQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
  }
  catch (error) {
    yield call(alert("Something went wrong!"));
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery(fetchMovieDetails.type, fetchCreditsHandler);
}
