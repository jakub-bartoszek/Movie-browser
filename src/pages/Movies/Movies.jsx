import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";

import {
  fetchPopularMovies,
  fetchMoviesSearchResults,
  selectMovies,
  selectSearchMovieQuery,
} from "../../utils/redux/moviesSlice";
import { nanoid } from "nanoid";

import {
  Button,
  Container,
  Content,
  Header,
  Pagination,
  StyledLeftIcon,
  StyledRightIcon,
} from "./styled";

export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const searchMovieQuery = useSelector(selectSearchMovieQuery);

  useEffect(() => {
    if (searchMovieQuery) {
      dispatch(fetchMoviesSearchResults(searchMovieQuery));
    } else {
      dispatch(fetchPopularMovies());
    }
  }, [searchMovieQuery, dispatch]);

  return (
    <Container>
      <Header>Popular movies</Header>
      <Content>
        {movies.map((movie) => (
          <SmallTile movie={movie} />
        ))}
      </Content>
      <Pagination>
        <Button>
          <StyledLeftIcon />
          <StyledLeftIcon />
        </Button>
        <Button>
          <StyledLeftIcon />
        </Button>
        <span>
          Page <strong>1</strong> of <strong>500</strong>
        </span>
        <Button>
          <StyledRightIcon />
        </Button>
        <Button>
          <StyledRightIcon />
          <StyledRightIcon />
        </Button>
      </Pagination>
    </Container>
  );
}
