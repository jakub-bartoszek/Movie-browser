import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    status: "",
    page: 1,
    totalPages: "",
  },
  reducers: {
    fetchPopularPeople: (state) => {},
    fetchSearchResults: (state) => {},
    setPeople: (state, { payload }) => {
      state.people = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
  },
});

export const {
  setPeople,
  setStatus,
  fetchSearchResults,
  fetchPopularPeople,
  setPage,
  setTotalPages,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectSearchQuery = (state) =>
  selectPeopleState(state).searchQuery;
export const selectPage = (state) => selectPeopleState(state).page;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;

export default peopleSlice.reducer;
