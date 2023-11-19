import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
  },
  reducers: {
    fetchPopularPeople: (state) => { },
    fetchSearchResults: (state) => { },
    setPeople: (state, { payload }) => {
      state.people = payload;
    },
  },
});

export const {
  setPeople,
  fetchSearchResults,
  fetchPopularPeople,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectSearchPeopleQuery = (state) => selectPeopleState(state).searchPeopleQuery;

export default peopleSlice.reducer;
