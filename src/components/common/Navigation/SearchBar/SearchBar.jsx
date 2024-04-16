import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { selectCategory } from "../../../../utils/redux/dataSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
 const category = useSelector(selectCategory);
 const [searchQuery, setSearchQuery] = useState();
 const navigate = useNavigate();

 const onInputChange = (e) => {
  setSearchQuery(e.target.value);
 };

 const onFormSubmit = () => {
  navigate(`/${category}?search=${searchQuery}`);
 };

 return (
  <Wrapper onSubmit={onFormSubmit}>
   <StyledSearchIcon />
   <SearchInput
    value={searchQuery}
    onChange={onInputChange}
    placeholder={`Search for ${category}...`}
   />
  </Wrapper>
 );
};
