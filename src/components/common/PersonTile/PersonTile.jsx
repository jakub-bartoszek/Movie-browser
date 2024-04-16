import {
 Image,
 ImageWrapper,
 Character,
 Name,
 Wrapper,
 FilmName,
 PersonIcon,
} from "./styled";
import { toPersonPage } from "../../../routes/routes";

export const PersonTile = ({ person, filmName }) => {
 return (
  <Wrapper
   to={toPersonPage({ id: person.id })}
  >
   <ImageWrapper>
    {person.profile_path ? (
     <Image
      src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
      alt=""
     />
    ) : (
     <PersonIcon />
    )}
   </ImageWrapper>
   <Character>
    <Name>{person.name}</Name>
    {filmName && <FilmName>{filmName}</FilmName>}
   </Character>
  </Wrapper>
 );
};
