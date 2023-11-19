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
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../utils/redux/moviesSlice";
import { PersonTileDemo } from "./PersonMovieTileDemo/PersonTileDemo";

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const { title, vote_average, vote_count, backdrop_path, poster_path, release_date, production_countries, overview, genres } = movieDetails;

  return (
    <>
      <MainWrapper>
        <Header backdropPath={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
          <RatingTopContent>
            <LongTitle>{title} </LongTitle>
            <Rating>
              <IconStar />
              {vote_average ? vote_average.toFixed(2) : ""}
              <Rate>/ 10</Rate>
              <Votes>{vote_count}</Votes>
            </Rating>
          </RatingTopContent>
        </Header>
      </MainWrapper>

      <Wrapper>
        <Tile
          poster_path={poster_path}
          title={title}
          release_date={release_date}
          production_countries={production_countries}
          vote_average={vote_average}
          votes={vote_count}
          overview={overview}
          genres={genres}
        />
        <SectionTitle>Cast</SectionTitle>
        <Section>
          <PersonTileDemo />
        </Section>
        <SectionTitle>Crew</SectionTitle>
        <Section>

        </Section>
      </Wrapper>
    </>
  );
}
