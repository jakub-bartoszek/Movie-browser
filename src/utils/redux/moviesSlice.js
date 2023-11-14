import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchQuery: "",
    genres: [],
  },
  reducers: {
    fetchPopularMovies: (state) => {},
    fetchMoviesSearchResults: (state) => {},
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});
export const {
  fetchPopularMovies,
  setSearchQuery,
  setMovies,
  fetchMoviesSearchResults,
  setGenres,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectSearchQuery = (state) =>
  selectMoviesState(state).searchQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
