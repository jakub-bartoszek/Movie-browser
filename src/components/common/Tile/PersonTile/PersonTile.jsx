import { Image, ImageWrapper, Character, Name, Wrapper, FilmName, PersonIcon } from "./styled";


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
          <PersonIcon />
        )}
      </ImageWrapper>
      <Character>
        <Name>{member.name}</Name>
        {filmName && <FilmName>{filmName}</FilmName>}
      </Character>
    </Wrapper>
  );
};
