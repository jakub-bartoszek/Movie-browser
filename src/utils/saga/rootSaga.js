import { all } from "redux-saga/effects";

import { moviesSaga } from "./moviesSaga";
// import { personSaga } from "./personSagaA";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    // personSaga(),
  ]);
}