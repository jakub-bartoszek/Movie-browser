import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
 name: "data",
 initialState: {
  genres: [],
  status: "",
  page: 1,
  totalPages: 1,
  searchQuery: "",
  category: "movies"
 },

 reducers: {
  setStatus: (state, { payload }) => {
   state.status = payload;
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
 setStatus,
 setSearchQuery,
 setGenres,
 setPage,
 setTotalPages,
 setCategory
} = dataSlice.actions;

export const selectDataState = (state) => state.data;
export const selectStatus = (state) => selectDataState(state).status;
export const selectSearchQuery = (state) => selectDataState(state).searchQuery;
export const selectGenres = (state) => selectDataState(state).genres;
export const selectPage = (state) => selectDataState(state).page;
export const selectTotalPages = (state) => selectDataState(state).totalPages;
export const selectCategory = (state) => selectDataState(state).category;

export default dataSlice.reducer;
