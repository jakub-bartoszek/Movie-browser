import {
 Image,
 ImageWrapper,
 Character,
 Name,
 Wrapper,
 FilmName,
 PersonIcon,
 StyledNavLink
} from "./styled";
import { toPersonPage } from "../../../routes/routes";
import { nanoid } from "nanoid";

export const PersonTile = ({ member, filmName }) => {
 return (
  <StyledNavLink
   to={toPersonPage({ id: member.id })}
   key={nanoid()}
  >
   <Wrapper>
    <ImageWrapper>
     {member.profile_path ? (
      <Image
       src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
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
  </StyledNavLink>
 );
};
