import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
 name: "movies",
 initialState: {
  movies: [],
  movieDetails: [],
  movieCredits: {
   cast: [],
   crew: [],
  },
 },

 reducers: {
  fetchPopularMovies: (state) => { },
  fetchMoviesSearchResults: (state) => { },
  fetchMovieDetails: (state) => { },
  fetchMovieCredits: (state) => { },

  setMovies: (state, { payload }) => {
   state.movies = payload;
  },
  setMovieDetails: (state, { payload: movieDetails }) => {
   state.movieDetails = movieDetails;
  },
  setMovieCredits: (state, { payload }) => {
   state.movieCredits = payload;
  },
 }
});
export const {
 fetchMoviesSearchResults,
 fetchMovieDetails,
 fetchMovieCredits,
 fetchPopularMovies,
 setMovies,
 setMovieDetails,
 setMovieCredits,
} = moviesSlice.actions;

export const selectMoviesSlice = (state) => state.movies;
export const selectMovies = (state) => selectMoviesSlice(state).movies;
export const selectMovieDetails = (state) => selectMoviesSlice(state).movieDetails;
export const selectMovieCredits = (state) => selectMoviesSlice(state).movieCredits;

export default moviesSlice.reducer;
