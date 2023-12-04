import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    category: "movies",
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setSearchPage: (state, { payload }) => {
      state.page = payload;
    },
    setSearchTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
  },
});
export const { setSearchQuery, setCategory, setSearchPage, setSearchTotalPages } =
  searchSlice.actions;

export const selectSearchState = (state) => state.search;

export const selectSearchQuery = (state) =>
  selectSearchState(state).searchQuery;
export const selectCategory = (state) => selectSearchState(state).category;
export const selectSearchPage = (state) => selectSearchState(state).page;
export const selectSearchTotalPages = (state) =>
  selectSearchState(state).totalPages;

export default searchSlice.reducer;
