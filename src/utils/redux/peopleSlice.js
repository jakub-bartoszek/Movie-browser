import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
 name: "people",
 initialState: {
  people: [],
  personDetails: [],
  personCredits: {
   cast: [],
   crew: [],
  },
 },

 reducers: {
  fetchPopularPeople: (state) => { },
  fetchPeopleSearchResults: (state) => { },
  fetchPersonDetails: (state) => { },
  fetchPersonCredits: (state) => { },

  setPeople: (state, { payload }) => {
   state.people = payload;
  },
  setPersonDetails: (state, { payload }) => {
   state.personDetails = payload;
  },
  setPersonCredits: (state, { payload }) => {
   state.personCredits = payload;
  },
 }
});
export const {
 fetchPeopleSearchResults,
 fetchPersonDetails,
 fetchPersonCredits,
 fetchPopularPeople,
 setPeople,
 setPersonDetails,
 setPersonCredits,
} = peopleSlice.actions;

export const selectPeopleSlice = (state) => state.people;
export const selectPeople = (state) => selectPeopleSlice(state).people;
export const selectPersonDetails = (state) => selectPeopleSlice(state).personDetails;
export const selectPersonCredits = (state) => selectPeopleSlice(state).personCredits;

export default peopleSlice.reducer;
