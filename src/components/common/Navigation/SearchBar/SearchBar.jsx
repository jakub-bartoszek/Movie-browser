import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { selectCategory } from "../../../../utils/redux/dataSlice";
import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";

export const SearchBar = () => {
 const category = useSelector(selectCategory);
 const [searchParams] = useSearchParams();
 const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
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
