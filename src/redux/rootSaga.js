import { all } from "redux-saga/effects";

import { tasksSaga } from "./moviesSaga";

export default function* rootSaga() {
  yield all([
    tasksSaga(),
  ]);
}