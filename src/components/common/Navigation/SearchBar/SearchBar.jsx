import { useSelector } from "react-redux";
import { selectCategory } from "../../../../utils/redux/searchSlice";
import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useSearch } from "./useSearch";

export const SearchBar = () => {
	const category = useSelector(selectCategory)
	
	const { onInputChange, value } = useSearch();
	return (
		<Wrapper>
			<StyledSearchIcon />
			<SearchInput
				placeholder={`Search for ${category}...`}
				value={value}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};