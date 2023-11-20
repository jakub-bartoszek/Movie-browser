import { StyledPictureIcon } from "../SmallTile/styled";
import { Image, ImageWrapper, Character, Name, Wrapper, FilmName } from "./styled";

export const PersonTile = ({ member, filmName }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        {member.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
            alt=""
          />
        ) : (
          <StyledPictureIcon />
        )}
      </ImageWrapper>
      <Character>
        <Name>{member.name}</Name>
        {filmName && <FilmName>{filmName}</FilmName>}
      </Character>
    </Wrapper>
  );
};
