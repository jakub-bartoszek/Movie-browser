import { toMovies, toPeople } from "../../../routes";
import { SearchBar } from "./SearchBar/SearchBar";
import {
	Container,
	Logo,
	StyledLi,
	StyledNav,
	StyledNavLink,
	StyledUl,
	StyledVideoIcon,
	Title,
	Wrapper
} from "./styled";

export const Navigation = () => {
	return (
		<StyledNav>
			<Wrapper>
				<Container>
					<Logo to="/movies">
						<StyledVideoIcon />
						<Title>movies browser</Title>
					</Logo>
					<StyledUl>
						<StyledLi>
							<StyledNavLink to={toMovies()}>movies</StyledNavLink>
						</StyledLi>
						<StyledLi>
							<StyledNavLink to={toPeople()}>people</StyledNavLink>
						</StyledLi>
					</StyledUl>
				</Container>
				<SearchBar />
			</Wrapper>
		</StyledNav>
	);
};
