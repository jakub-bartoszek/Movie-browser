import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 33px;
	padding: 12px 24px;
	gap: 16px;
	flex-grow: 1;
	overflow: hidden;

	&:focus-within {
		outline: 2px solid ${({ theme }) => theme.colors.searchBar.mutedText};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		padding: 14px 16px;
	}
`;

export const StyledSearchIcon = styled(SearchIcon)`
	color: ${({ theme }) => theme.colors.searchBar.mutedText};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		height: 16px;
		width: 16px;
	}
`;

export const SearchInput = styled.input`
	border: none;
	outline: none;
	font-size: 16px;
	line-height: 150%;

	&::placeholder {
		color: ${({ theme }) => theme.colors.searchBar.mutedText};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 13px;
	}
`;
