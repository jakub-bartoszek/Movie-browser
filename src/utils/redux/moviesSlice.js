import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchQuery: "",
    genres: [],
    movieDetails: [],
    cast: [],
    crew: []

  },
  reducers: {
    fetchPopularMovies: state => {
    },
    fetchSearchResults: state => {
    },
    fetchMovieDetails: state => {
    },

    setCredits: (state, { payload: credits }) => {
      state.cast = credits.cast;
      state.crew = credits.crew;
    },

    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
    },


  }
});
export const {
  fetchPopularMovies,
  fetchMovieDetails,
  setSearchQuery,
  setMovies,
  fetchSearchResults,
  setGenres,
  fetchCredits,
  setCredits,
  setMovieDetails,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectSearchQuery = (state) => selectMoviesState(state).searchQuery;
export const selectGenres = (state) => selectMoviesState(state).genres;

// export const selectMovieById = (state, movieId) => selectMovies(state).find(({ id }) => id === movieId);



export default moviesSlice.reducer;