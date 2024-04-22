import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
 name: "data",
 initialState: {
  genres: [],
  status: "",
  totalPages: 1,
  category: "movies"
 },

 reducers: {
  setStatus: (state, { payload }) => {
   state.status = payload;
  },
  setCategory: (state, { payload }) => {
   state.category = payload;
  },
  setGenres: (state, { payload }) => {
   state.genres = payload;
  },
  setTotalPages: (state, { payload }) => {
   state.totalPages = payload;
  }
 }
});
export const {
 setStatus,
 setGenres,
 setTotalPages,
 setCategory
} = dataSlice.actions;

export const selectDataState = (state) => state.data;
export const selectStatus = (state) => selectDataState(state).status;
export const selectGenres = (state) => selectDataState(state).genres;
export const selectTotalPages = (state) => selectDataState(state).totalPages;
export const selectCategory = (state) => selectDataState(state).category;

export default dataSlice.reducer;
