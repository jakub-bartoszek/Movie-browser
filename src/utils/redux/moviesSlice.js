import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    movieDetails: [],
    cast: [],
    crew: [],
    status: "",
  },
  reducers: {
    fetchPopularMovies: (state) => {},
    fetchSearchResults: (state) => {},
    fetchMovieDetails: (state) => {},
    fetchCredits: (state) => {},

    setMovieCredits: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
  },
});
export const {
  fetchPopularMovies,
  fetchMovieDetails,
  setSearchQuery,
  setMovies,
  fetchSearchResults,
  fetchCredits,
  setGenres,
  setMovieCredits,
  setMovieDetails,
  setStatus,
  setPage,
  setTotalPages,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectSearchQuery = (state) =>
  selectMoviesState(state).searchQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;

export default moviesSlice.reducer;
