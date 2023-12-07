import { useNavigate } from "react-router";
import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useSearch } from "./useSearch";
import { selectCategory } from "../../../../utils/redux/dataSlice";
import { useSelector } from "react-redux";

export const SearchBar = () => {
 const category = useSelector(selectCategory);
 const { onInputChange, searchQuery } = useSearch();
 const navigate = useNavigate()
 
 return (
  <Wrapper>
   <StyledSearchIcon />
   <SearchInput
    placeholder={`Search for ${category}...`}
    value={searchQuery || ""}
    onChange={onInputChange}
    onClick={() => navigate(`/${category}`)}
   />
  </Wrapper>
 );
};
