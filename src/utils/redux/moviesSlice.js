import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchMovieQuery: "",
    genres: [],
  },
  reducers: {
    fetchPopularMovies: (state) => {},
    fetchMoviesSearchResults: (state) => {},
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setSearchMovieQuery: (state, { payload }) => {
      state.searchMovieQuery = payload;
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});
export const {
  fetchPopularMovies,
  setSearchMovieQuery,
  setMovies,
  fetchMoviesSearchResults,
  setGenres,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectSearchMovieQuery = (state) =>
  selectMoviesState(state).searchMovieQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
