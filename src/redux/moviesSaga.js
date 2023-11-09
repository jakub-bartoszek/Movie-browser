import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { fetchMovies, fetchMoviesSuccess, } from "./moviesSlice";
import { getMovies } from './getMovies';

function* fetchMoviesHandler() {
  try {
    yield delay(1000);
    const movies = yield call(getMovies);
    yield put(fetchMoviesSuccess(movies));
  }
  catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

export function* tasksSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
