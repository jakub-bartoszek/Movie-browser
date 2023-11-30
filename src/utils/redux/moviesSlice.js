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
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectSearchQuery = (state) =>
  selectMoviesState(state).searchQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
