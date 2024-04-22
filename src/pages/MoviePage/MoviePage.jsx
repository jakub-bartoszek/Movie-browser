import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
 fetchMovieCredits,
 fetchMovieDetails,
 selectMovieCredits,
 selectMovieDetails
} from "../../utils/redux/moviesSlice";
import { selectStatus, setCategory } from "../../utils/redux/dataSlice";
import { Section, SectionTitle, Container, Content } from "./styled";
import { Tile } from "../../components/common/Tile/Tile";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Error } from "../Error/Error";
import { MovieBanner } from "../../components/common/MovieBanner/MovieBanner";

export default function MoviePage() {
 const dispatch = useDispatch();
 const { id } = useParams();
 const movieDetails = useSelector(selectMovieDetails);
 const status = useSelector(selectStatus);
 const movieCredits = useSelector(selectMovieCredits);

 useEffect(() => {
  dispatch(fetchMovieDetails(id));
  dispatch(fetchMovieCredits(id));
 }, [dispatch, id]);

 useEffect(() => {
  dispatch(setCategory("movies"));
 }, []);

 const renderContent = () => {
  switch (status) {
   case "error":
    return <Error />;
   case "loading":
    return <StyledLoader />;
   case "success":
    return (
     <>
      <MovieBanner movieDetails={movieDetails} />
      <Content>
       <Tile
        poster_path={movieDetails.poster_path}
        title={movieDetails.title}
        release_date={movieDetails.release_date}
        production_countries={movieDetails.production_countries}
        vote_average={movieDetails.vote_average}
        votes={movieDetails.vote_count}
        overview={movieDetails.overview}
        genres={movieDetails.genres}
       />
       <SectionTitle>Cast</SectionTitle>
       <Section>
        {movieCredits.cast.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
          filmName={person.character ? person.character : "Unknown Character"}
         />
        ))}
       </Section>
       <SectionTitle>Crew</SectionTitle>
       <Section>
        {movieCredits.crew.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
         />
        ))}
       </Section>
      </Content>
     </>
    );
   default:
    return null;
  }
 };

 return <Container>{renderContent()}</Container>;
}
