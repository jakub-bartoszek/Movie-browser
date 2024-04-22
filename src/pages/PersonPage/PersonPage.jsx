import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, setCategory } from "../../utils/redux/dataSlice";
import {
 fetchPersonCredits,
 fetchPersonDetails,
 selectPersonCredits,
 selectPersonDetails
} from "../../utils/redux/peopleSlice";
import { toMoviePage } from "../../routes/routes";
import { nanoid } from "nanoid";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Error } from "../Error/Error";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import { PersonTileBig } from "../../components/common/PersonTileBig/PersonTileBig";
import { Section, SectionTitle, StyledNav, Container } from "./styled";

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
     <>
      <PersonTileBig personDetails={personDetails} />
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
     </>
    );
   default:
    return null;
  }
 };

 return <Container>{renderContent()}</Container>;
}
