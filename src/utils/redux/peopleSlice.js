import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    status: "",
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
  },
});

export const { setPeople, setStatus, fetchSearchResults, fetchPopularPeople } =
  peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectSearchQuery = (state) =>
  selectPeopleState(state).searchQuery;

export default peopleSlice.reducer;
