import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";

export const SearchBar = () => {
	return (
		<Wrapper>
			<StyledSearchIcon />
			<SearchInput placeholder="Search for movies..." />
		</Wrapper>
	);
};
