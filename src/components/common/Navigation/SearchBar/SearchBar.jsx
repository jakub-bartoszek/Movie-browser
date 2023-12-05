import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useSearch } from "./useSearch";

export const SearchBar = () => {
 const category = "movies";
 const { onInputChange, searchQuery } = useSearch();
 
 return (
  <Wrapper>
   <StyledSearchIcon />
   <SearchInput
    placeholder={`Search for ${category}...`}
    value={searchQuery || ""}
    onChange={onInputChange}
   />
  </Wrapper>
 );
};
