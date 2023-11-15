import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useSearch } from "./useSearch";

export const SearchBar = () => {
	
	const { onInputChange, value } = useSearch();
	return (
		<Wrapper>
			<StyledSearchIcon />
			<SearchInput
				placeholder="Search for movies..."
				value={value}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};
