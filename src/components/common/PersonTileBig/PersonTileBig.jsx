import {
 Biography,
 Birth,
 BirthDate,
 BirthPlace,
 Content,
 Image,
 ImageWrapper,
 Name,
 Wrapper
} from "./styled";

export const PersonTileBig = ({ personDetails }) => (
 <Wrapper>
  <ImageWrapper>
   <Image
    src={`https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`}
    alt=""
   />
  </ImageWrapper>
  <Content>
   <Name>{personDetails.name}</Name>
   <Birth>
    <BirthDate>
     {personDetails && personDetails.birthday
      ? personDetails.birthday.toString().split("-").reverse().join(".")
      : "N/A"}
    </BirthDate>
    <BirthPlace>{personDetails.place_of_birth}</BirthPlace>
   </Birth>
  </Content>
  <Biography>{personDetails.biography}</Biography>
 </Wrapper>
);
