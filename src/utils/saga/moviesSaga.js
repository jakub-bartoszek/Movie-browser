import { put, call, takeLatest, delay } from "redux-saga/effects";
import {
  setGenres,
  setStatus,
  setTotalPages,
} from "../redux/dataSlice";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMoviesSearchResults,
  fetchPopularMovies,
  setMovieCredits,
  setMovieDetails,
  setMovies
} from "../redux/moviesSlice";
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { getGenres } from "./getGenres";
import { getMoviesDetails } from "./getMovieDetails";
import { getMovieCredits } from "./getMovieCredits";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getPopular, payload.category, payload.page);
    const genres = yield call(getGenres);
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setMovies(data.results));
    yield put(setGenres(genres));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}
export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(setStatus("loading"));
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* fetchMovieCreditsHandler({ payload: movieId }) {
  try {
    yield delay(1000);
    const credits = yield call(getMovieCredits, movieId);
    yield put(setMovieCredits({ cast: credits.cast, crew: credits.crew }));
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
    const genres = yield call(getGenres);
    yield put(setTotalPages(data.total_pages > 500 ? 500 : data.total_pages));
    yield put(setMovies(data.results));
    yield put(setGenres(genres));
    yield delay(1000);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMoviesSearchResults.type, fetchSearchResultsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
