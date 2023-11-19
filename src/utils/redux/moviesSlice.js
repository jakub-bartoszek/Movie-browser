import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    status: ""
  },
  reducers: {
    fetchPopularMovies: state => {
    },
    fetchSearchResults: state => {
    },
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
    }
  }
});
export const {
  fetchPopularMovies,
  fetchSearchResults,
  setMovies,
  setStatus,
  setGenres
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectSearchQuery = (state) => selectMoviesState(state).searchQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;


export default moviesSlice.reducer;