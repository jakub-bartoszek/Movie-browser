import { Image, ImageWrapper, Character, Name, Wrapper, FilmName, PersonIcon, StyledNavLink } from "./styled";
import { toPersonPage } from "../../../routes";

export const PersonTile = ({ member, filmName }) => {
  return (
    <StyledNavLink
      to={toPersonPage({ id: member.id })}
      key={member.id}
    >
      <Wrapper>
        <ImageWrapper>
          {member.profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
              alt=""
            />
          ) : (
            <PersonIcon />
          )}
        </ImageWrapper>
        <Character>
          <Name>{member.name}</Name>
          {filmName && <FilmName>{filmName}</FilmName>}
        </Character>
      </Wrapper>
    </StyledNavLink >
  );
};
