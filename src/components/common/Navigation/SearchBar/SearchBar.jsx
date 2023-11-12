import { SearchInput, StyledSearchIcon, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
	selectSearchQuery,
	setSearchQuery
} from "../../../../utils/redux/moviesSlice";

export const SearchBar = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchQuery);

	return (
		<Wrapper>
			<StyledSearchIcon />
			<SearchInput
				placeholder="Search for movies..."
				value={searchQuery}
				onChange={(e) => {
					dispatch(setSearchQuery(e.target.value));
				}}
			/>
		</Wrapper>
	);
};
