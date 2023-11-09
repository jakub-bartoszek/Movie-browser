import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: []
  },
  reducers: {
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    fetchMovies: () => { }
  }
});

export const {
  setMovies,
  fetchMovies
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;