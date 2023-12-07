import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
 name: "data",
 initialState: {
  movies: [],
  people: [],
  movieDetails: [],
  personDetails: [],
  genres: [],
  movieCredits: {
   cast: [],
   crew: [],
  },
  personCredits: {
   cast: [],
   crew: [],
  },
  status: "",
  page: 1,
  totalPages: 1,
  searchQuery: "",
  category: "movies"
 },

 reducers: {
  fetchPopularMovies: (state) => { },
  fetchPopularPeople: (state) => { },
  fetchMoviesSearchResults: (state) => { },
  fetchPeopleSearchResults: (state) => { },
  fetchMovieDetails: (state) => { },
  fetchPersonDetails: (state) => { },
  fetchMovieCredits: (state) => { },
  fetchPersonCredits: (state) => { },

  setStatus: (state, { payload }) => {
   state.status = payload;
  },
  setMovies: (state, { payload }) => {
   state.movies = payload;
  },
  setPeople: (state, { payload }) => {
   state.people = payload;
  },
  setMovieDetails: (state, { payload: movieDetails }) => {
   state.movieDetails = movieDetails;
  },
  setPersonDetails: (state, { payload }) => {
   state.personDetails = payload;
  },
  setMovieCredits: (state, { payload }) => {
   state.movieCredits = payload;
  },
  setPersonCredits: (state, { payload }) => {
   state.personCredits = payload;
  },
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setCategory: (state, { payload }) => {
   state.category = payload;
  },
  setGenres: (state, { payload }) => {
   state.genres = payload;
  },
  setPage: (state, { payload }) => {
   state.page = payload;
  },
  setTotalPages: (state, { payload }) => {
   state.totalPages = payload;
  }
 }
});
export const {
 fetchMoviesSearchResults,
 fetchPeopleSearchResults,
 fetchMovieDetails,
 fetchPersonDetails,
 fetchMovieCredits,
 fetchPersonCredits,
 fetchPopularMovies,
 fetchPopularPeople,
 setStatus,
 setMovies,
 setPeople,
 setMovieDetails,
 setPersonDetails,
 setMovieCredits,
 setPersonCredits,
 setSearchQuery,
 setGenres,
 setPage,
 setTotalPages,
 setCategory
} = dataSlice.actions;

export const selectDataState = (state) => state.data;
export const selectStatus = (state) => selectDataState(state).status;
export const selectMovies = (state) => selectDataState(state).movies;
export const selectPeople = (state) => selectDataState(state).people;
export const selectSearchQuery = (state) => selectDataState(state).searchQuery;
export const selectGenres = (state) => selectDataState(state).genres;
export const selectPage = (state) => selectDataState(state).page;
export const selectTotalPages = (state) => selectDataState(state).totalPages;
export const selectCategory = (state) => selectDataState(state).category;
export const selectSearchTotalPages = (state) => selectDataState(state).totalPages;
export const selectMovieDetails = (state) => selectDataState(state).movieDetails;
export const selectPersonDetails = (state) => selectDataState(state).personDetails;
export const selectMovieCredits = (state) => selectDataState(state).movieCredits;
export const selectPersonCredits = (state) => selectDataState(state).personCredits;

export default dataSlice.reducer;
