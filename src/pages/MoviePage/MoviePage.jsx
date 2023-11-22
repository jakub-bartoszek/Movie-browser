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
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../components/common/Tile/PersonTile/PersonTile";
import { fetchMovieDetails, selectStatus, fetchCredits } from "../../utils/redux/moviesSlice";
import { StyledLoader } from "../../components/common/StyledLoader/styled";

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const status = useSelector(selectStatus);
  const credits = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchCredits(id));
  }, [dispatch, id]);

  return (
    <Container>
      {
        {
          loading: <StyledLoader />,
          error: <p>Error!</p>,
          success: (
            <>
              <MainWrapper>
                <Header backdropPath={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}>
                  <RatingTopContent>
                    <LongTitle>{movieDetails.title}</LongTitle>
                    <Rating>
                      <IconStar />
                      <ContainerRateText>
                        {movieDetails.vote_average ? movieDetails.vote_average.toFixed(2).toString().replace(".", ',') : "No votes yet"}
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
                  {credits.cast.map((member) => (
                    <PersonTile key={member.credit_id} member={member} filmName={member.character ? member.character : "Unknown Character"} />
                  ))}
                </Section>
                <SectionTitle>Crew</SectionTitle>
                <Section>
                  {credits.crew.map((member) => (
                    <PersonTile key={member.credit_id} member={member} />
                  ))}
                </Section>
              </Wrapper>
            </>
          ),
        }[status]
      }
    </Container>
  );
}
