import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchMovies, setMovies } from "./moviesSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getMovies);
    yield put(setMovies(movies));
  }
  catch (error) {
    console.log(error);
  }
}

export function* watchFetchMovies() {
  yield call(console.log("Saga podłączona"));
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}