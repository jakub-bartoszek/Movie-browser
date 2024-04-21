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
import {
 MainWrapper,
 Header,
 Wrapper,
 Section,
 SectionTitle,
 LongTitle,
 Rating,
 Rate,
 IconStar,
 Votes,
 RatingTopContent,
 ContainerRateText,
 Container
} from "./styled";
import { Tile } from "../../components/common/Tile/Tile";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Error } from "../Error/Error";

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
      <MainWrapper>
       <Header $backdropPath={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}>
        <RatingTopContent>
         <LongTitle>{movieDetails.title}</LongTitle>
         <Rating>
          <IconStar />
          <ContainerRateText>
           {movieDetails.vote_average
            ? movieDetails.vote_average.toFixed(2).toString().replace(".", ",")
            : "No votes yet"}
           <Rate>/ 10</Rate>
          </ContainerRateText>
          <Votes>{movieDetails.vote_count}&nbsp;votes</Votes>
         </Rating>
        </RatingTopContent>
       </Header>
      </MainWrapper>
      <Wrapper>
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
      </Wrapper>
     </>
    );
   default:
    return null;
  }
 };

 return <Container>{renderContent()}</Container>;
}
