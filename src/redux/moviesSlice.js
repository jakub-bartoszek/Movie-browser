import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],

    loading: false,
  },
  reducers: {
    fetchMovies: state => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = false;
    },
    fetchMoviesError: (state) => {
      state.loading = false;
    },
  }
});
export const {
  fetchMovies, fetchMoviesSuccess, fetchMoviesError
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectIsLoading = (state) => selectMoviesState(state).loading;


export default moviesSlice.reducer;