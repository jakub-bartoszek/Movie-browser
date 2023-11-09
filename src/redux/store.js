import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchMovies } from "./moviesSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchFetchMovies)

export default store;