import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchMovieQuery,
  setSearchMovieQuery,
} from "../../../../utils/redux/moviesSlice";
import { selectSearchPeopleQuery } from "../../../../utils/redux/peopleSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchMovieQuery = useSelector(selectSearchMovieQuery);
  const searchPeopleQuery = useSelector(selectSearchPeopleQuery);

  return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInput
        placeholder="Search for movies..."
        value={searchMovieQuery}
        onChange={(e) => {
          dispatch(setSearchMovieQuery(e.target.value));
        }}
      />
    </Wrapper>
  );
};
