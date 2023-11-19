<<<<<<< HEAD
import { delay, put, call, takeEvery } from 'redux-saga/effects';
=======
import { put, call, takeLatest, delay } from "redux-saga/effects";
>>>>>>> cde895b40d4fb1438a481fd573b0194292029f98
import {
  fetchPopularMovies,
  fetchSearchResults,
  setGenres,
  setMovies,
<<<<<<< HEAD
  setMovieDetails,
  fetchMovieDetails,
  setCredits,
} from "../redux/moviesSlice";
import { getPopularMovies } from './getPopularMovies';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';
import { getMoviesDetails } from './getMovieDetails';
import { getCredits } from './getCredits';
=======
  setStatus,
} from "../redux/moviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getSearchResults } from "./getSearchResults";
import { getGenres } from "./getGenres";
>>>>>>> cde895b40d4fb1438a481fd573b0194292029f98

function* fetchPopularMoviesHandler() {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getPopularMovies);
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
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getSearchResults, searchQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchSearchResults.type, fetchSearchResultsHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery(fetchMovieDetails.type, fetchCreditsHandler);
}
