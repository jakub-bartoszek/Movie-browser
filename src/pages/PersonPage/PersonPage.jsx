import { useDispatch, useSelector } from "react-redux";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { fetchCreditsForPerson, selectStatus } from "../../utils/redux/peopleSlice";
import { Container } from "../Error/styled";
import { Biography, Birth, GreyText, Image, Name, PersonTile, Section, SectionTitle, Wrapper } from "./styled";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchPersonDetails } from "../../utils/redux/peopleSlice";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile"
import { Error } from "../Error/Error"



export default function PersonPage() {
   const status = useSelector(selectStatus);
   const dispatch = useDispatch();
   const { id } = useParams();
   const personDetails = useSelector(state => state.people.personDetails);
   const credits = useSelector(state => state.people);


   useEffect(() => {
      dispatch(fetchPersonDetails(id));
      dispatch(fetchCreditsForPerson(id));
   }, [id, dispatch]);


   return (
      <Container>
         {
            {
               loading: <StyledLoader />,
               error: <p>Error!</p>,
               success: (
                  <>
                     <Wrapper>
                        <PersonTile>
                           <Image src={`https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`} alt="" />
                           <Name>{personDetails.name}</Name>
                           <GreyText></GreyText>
                           <Biography>
                              {personDetails.biography}
                           </Biography>
                           <GreyText>
                              <Birth />
                              <p>{personDetails.birthday}</p>


                              Place of birth: <p>{personDetails.place_of_birth}</p>
                           </GreyText>
                        </PersonTile>
                        <SectionTitle>Movies - cast {credits.cast && credits.cast.length > 0 ? `(${credits.cast.length})` : ""}</SectionTitle>
                        <Section>
                           {credits.cast && credits.cast.length > 0 ? (
                              credits.cast.map((movie) => (
                                 <SmallTile key={movie.credit_id} movie={movie} />
                              ))
                           ) : (
                              <Error />
                           )}
                        </Section>
                        <SectionTitle>Movies - crew {credits.crew && credits.crew.length > 0 ? `(${credits.crew.length})` : ""}</SectionTitle>
                        <Section>
                           {credits.cast && credits.cast.length > 0 ? (
                              credits.cast.map((movie) => (
                                 <SmallTile key={movie.credit_id} movie={movie} />
                              ))
                           ) : (
                              <Error />
                           )}
                        </Section>
                     </Wrapper>
                  </>
               ),
            }[status]
         }
      </Container>
   );
}

