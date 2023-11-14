import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    searchPeopleQuery: "",
  },
  reducers: {
    fetchPopularPeople: (state) => {},
    fetchPeopleSearchResults: (state) => {},
    setPeople: (state, { payload }) => {
      state.people = payload;
    },
    setSearchPeopleQuerry: (state, { payload }) => {
      state.searchPeopleQuery = payload;
    },
  },
});

export const {
  setPeople,
  setSearchPeopleQuerry,
  fetchPeopleSearchResults,
  fetchPopularPeople,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectSearchPeopleQuery = (state) => selectPeopleState(state).searchPeopleQuery;

export default peopleSlice.reducer;
