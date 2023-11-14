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
  Wrapper,
} from "./styled";

export const Navigation = () => {
  return (
    <StyledNav>
      <Wrapper>
        <Container>
          <Logo>
            <StyledVideoIcon />
            <Title>movie browser</Title>
          </Logo>
          <StyledUl>
            <StyledLi>
              <StyledNavLink to="/movies">movies</StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink to="/people">people</StyledNavLink>
            </StyledLi>
          </StyledUl>
        </Container>
        <SearchBar />
      </Wrapper>
    </StyledNav>
  );
};
