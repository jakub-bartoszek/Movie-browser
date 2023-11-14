import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    searchQuerry: "",
  },
  reducers: {
    fetchPopularPeople: (state) => {},
    fetchPeopleSearchResults: (state) => {},
    setPeople: (state, { payload }) => {
      state.people = payload;
    },
    setSearchQuerry: (state, { payload }) => {
      state.searchQuerry = payload;
    },
  },
});

export const {
  setPeople,
  setSearchQuerry,
  fetchPeopleSearchResults,
  fetchPopularPeople,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectSearchQuery = (state) => selectPeopleState(state).search;

export default peopleSlice.reducer;
