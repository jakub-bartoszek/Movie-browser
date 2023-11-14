import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";

import {
  fetchPopularMovies,
  fetchMoviesSearchResults,
  selectMovies,
  selectSearchQuery,
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
  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchMoviesSearchResults(searchQuery));
    } else {
      dispatch(fetchPopularMovies());
    }
  }, [searchQuery, dispatch]);

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
