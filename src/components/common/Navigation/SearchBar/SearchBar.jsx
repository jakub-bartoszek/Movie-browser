import { useSelector } from "react-redux";
import { selectCategory, selectSearchQuery } from "../../../../utils/redux/searchSlice";
import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useSearch } from "./useSearch";

export const SearchBar = () => {
	const category = useSelector(selectCategory)
	const searchQuery = useSelector(selectSearchQuery)
	
	const { onInputChange } = useSearch();
	return (
		<Wrapper>
			<StyledSearchIcon />
			<SearchInput
				placeholder={`Search for ${category}...`}
				value={searchQuery}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};