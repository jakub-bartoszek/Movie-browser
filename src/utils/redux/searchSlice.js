import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    category: "movies"
  },
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  }
});
export const {
  setSearchQuery,
  setCategory
} = searchSlice.actions;

export const selectSearchState = (state) => state.search;

export const selectSearchQuery = (state) => selectSearchState(state).searchQuery;
export const selectCategory = (state) => selectSearchState(state).category;


export default searchSlice.reducer;