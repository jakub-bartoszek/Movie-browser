import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, setCategory } from "../../utils/redux/dataSlice";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Container } from "../Error/styled";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import { Error } from "../Error/Error";
import { toMoviePage } from "../../routes/routes";
import {
 Biography,
 Birth,
 BirthDate,
 BirthPlace,
 Content,
 Image,
 ImageWrapper,
 Name,
 PersonTile,
 Section,
 SectionTitle,
 Wrapper,
 StyledNav
} from "./styled";
import { nanoid } from "nanoid";
import {
 fetchPersonCredits,
 fetchPersonDetails,
 selectPersonCredits,
 selectPersonDetails
} from "../../utils/redux/peopleSlice";

export default function PersonPage() {
 const dispatch = useDispatch();
 const { id } = useParams();
 const status = useSelector(selectStatus);
 const personDetails = useSelector(selectPersonDetails);
 const personCredits = useSelector(selectPersonCredits);

 useEffect(() => {
  dispatch(setCategory("people"));
 }, []);

 useEffect(() => {
  dispatch(fetchPersonDetails(id));
  dispatch(fetchPersonCredits(id));
 }, [id, dispatch]);

 const renderContent = () => {
  switch (status) {
   case "error":
    return <Error />;
   case "loading":
    return <StyledLoader />;
   case "success":
    return (
     <Wrapper>
      <PersonTile>
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
      </PersonTile>
      {personCredits.cast && personCredits.cast.length > 0 && (
       <>
        <SectionTitle>
         Movies - cast
         {personCredits.cast.length > 0 ? ` (${personCredits.cast.length})` : ""}
        </SectionTitle>
        <Section>
         {personCredits.cast.map((movie) => (
          <StyledNav
           to={toMoviePage({ id: movie.id })}
           key={nanoid()}
          >
           <SmallTile movie={movie} />
          </StyledNav>
         ))}
        </Section>
       </>
      )}
      {personCredits.crew && personCredits.crew.length > 0 && (
       <>
        <SectionTitle>
         Movies - crew
         {personCredits.crew.length > 0 ? ` (${personCredits.crew.length})` : ""}
        </SectionTitle>
        <Section>
         {personCredits.crew.map((movie) => (
          <StyledNav
           to={toMoviePage({ id: movie.id })}
           key={nanoid()}
          >
           <SmallTile movie={movie} />
          </StyledNav>
         ))}
        </Section>
       </>
      )}
     </Wrapper>
    );
   default:
    return null;
  }
 };

 return <Container>{renderContent()}</Container>;
}
