import { useParams } from "react-router";
import { useEffect } from "react";
import { Tile } from "../../components/common/Tile/Tile";
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
import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { selectStatus } from "../../utils/redux/dataSlice";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Error } from "../Error/Error";
import { nanoid } from "nanoid";
import {
 fetchMovieCredits,
 fetchMovieDetails,
 selectMovieCredits,
 selectMovieDetails
} from "../../utils/redux/moviesSlice";

export default function MoviePage() {
 const { id } = useParams();
 const dispatch = useDispatch();
 const movieDetails = useSelector(selectMovieDetails);
 const status = useSelector(selectStatus);
 const movieCredits = useSelector(selectMovieCredits);

 console.log(movieCredits)

 useEffect(() => {
  dispatch(fetchMovieDetails(id));
  dispatch(fetchMovieCredits(id));
 }, [dispatch, id]);

 return (
  <Container>
   {
    {
     loading: <StyledLoader />,
     error: <Error />,
     success: (
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
     )
    }[status]
   }
  </Container>
 );
}
