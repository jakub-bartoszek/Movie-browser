import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { fetchCreditsForPerson, selectStatus } from "../../utils/redux/peopleSlice";
import { Container } from "../Error/styled";
import {
   Biography,
   Birth,
   BirthDate,
   BirthPlace,
   Content,
   GreyText,
   Image,
   ImageWrapper,
   Name,
   PersonTile,
   Section,
   SectionTitle,
   SpecialContent,
   Wrapper,
   StyledNav,
} from "./styled";
import { useParams } from "react-router";
import { fetchPersonDetails } from "../../utils/redux/peopleSlice";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import { Error } from "../Error/Error";
import { toMoviePage } from "../../routes";
import { selectMovies } from "../../utils/redux/moviesSlice";

export default function PersonPage() {
   const status = useSelector(selectStatus);
   const dispatch = useDispatch();
   const { id } = useParams();
   const personDetails = useSelector((state) => state.people.personDetails);
   const credits = useSelector((state) => state.people);
   const movie = useSelector(selectMovies);

   useEffect(() => {
      dispatch(fetchPersonDetails(id));
      dispatch(fetchCreditsForPerson(id));
   }, [id, dispatch]);

   return (
      <Container>
         {(() => {
            switch (status) {
               case "loading":
                  return <StyledLoader />;
               case "error":
                  return <p>Error!</p>;
               case "success":
                  return (
                     <>
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
                                 <SpecialContent>
                                    <GreyText>
                                       <Birth>
                                          <BirthDate>
                                             {personDetails && personDetails.birthday
                                                ? personDetails.birthday
                                                   .toString()
                                                   .split("-")
                                                   .reverse()
                                                   .join(".")
                                                : "N/A"}
                                          </BirthDate>
                                       </Birth>
                                    </GreyText>
                                    <GreyText>
                                       Place of birth:{" "}
                                       <BirthPlace>{personDetails.place_of_birth}</BirthPlace>
                                    </GreyText>
                                 </SpecialContent>
                              </Content>
                              <Biography>{personDetails.biography}</Biography>
                           </PersonTile>
                           <SectionTitle>
                              Movies - cast{" "}
                              {credits.cast && credits.cast.length > 0
                                 ? `(${credits.cast.length})`
                                 : ""}
                           </SectionTitle>
                           <Section>
                              {credits.cast && credits.cast.length > 0 ? (
                                 credits.cast.map((movie) => (
                                    <StyledNav to={toMoviePage({ id: movie.id })} key={movie.id}>
                                       <SmallTile movie={movie} />
                                    </StyledNav>
                                 ))
                              ) : (
                                 <Error />
                              )}
                           </Section>
                           <SectionTitle>
                              Movies - crew{" "}
                              {credits.crew && credits.crew.length > 0
                                 ? `(${credits.crew.length})`
                                 : ""}
                           </SectionTitle>
                           <Section>
                              {credits.crew && credits.crew.length > 0 ? (
                                 credits.crew.map((movie) => (
                                    <StyledNav to={toMoviePage({ id: movie.id })} key={movie.id}>
                                       <SmallTile movie={movie} />
                                    </StyledNav>
                                 ))
                              ) : (
                                 <Error />
                              )}
                           </Section>
                        </Wrapper>
                     </>
                  );
               default:
                  return null;
            }
         })()}
      </Container>
   );
}
