import { all } from "redux-saga/effects";

import { moviesSaga } from "./moviesSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}