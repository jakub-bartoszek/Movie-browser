import { put, call, takeLatest, delay } from "redux-saga/effects";
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
import { getPopular } from "./getPopular";
import { getSearchResults } from "./getSearchResults";
import { getGenres } from "./getGenres";
import { getMoviesDetails } from "./getMovieDetails";
import { getCredits } from "./getCredits";
import { setTotalPages, setPage } from "../redux/searchSlice";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getPopular, payload.category, payload.page);
    const genres = yield call(getGenres);
    yield put(setPage(data.page));
    yield put(setTotalPages(data.total_pages));
    yield put(setMovies(data.results));
    yield put(setGenres(genres));
    yield delay(700);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}
export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* fetchCreditsHandler({ payload: movieId }) {
  try {
    yield delay(1000);
    const credits = yield call(getCredits, movieId);
    yield put(setMovieCredits(credits));
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
    yield put(setPage(data.page));
    yield put(setTotalPages(data.total_pages));
    yield put(setMovies(data.results));
    yield put(setGenres(genres));
    yield delay(700);
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
