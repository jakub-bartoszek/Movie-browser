import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchMovieQuery,
  setSearchMovieQuery,
} from "../../../../utils/redux/moviesSlice";
import {
  selectSearchPeopleQuery,
  setSearchPeopleQuerry,
} from "../../../../utils/redux/peopleSlice";
import { useLocation } from "react-router";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchMovieQuery = useSelector(selectSearchMovieQuery);
  const searchPeopleQuery = useSelector(selectSearchPeopleQuery);
  const location = useLocation();

  return (
    <Wrapper>
      <StyledSearchIcon />
      {location.pathname === "/people" ? (
        <SearchInput
          placeholder="Search for people..."
          value={searchPeopleQuery}
          onChange={(e) => {
            dispatch(setSearchPeopleQuerry(e.target.value));
          }}
        />
      ) : (
        <SearchInput
          placeholder="Search for movies..."
          value={searchMovieQuery}
          onChange={(e) => {
            dispatch(setSearchMovieQuery(e.target.value));
          }}
        />
      )}
    </Wrapper>
  );
};
