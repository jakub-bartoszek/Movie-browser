import { all } from "redux-saga/effects";

import { moviesSaga } from "./moviesSaga";
import { peopleSaga } from "./peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga()]);
}
