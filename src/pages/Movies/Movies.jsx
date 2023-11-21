import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import {
  fetchPopularMovies,
  fetchSearchResults,
  selectMovies,
  selectStatus,
} from "../../utils/redux/moviesSlice";
import {
  selectCategory,
  selectSearchQuery,
  setCategory,
  setSearchQuery,
} from "../../utils/redux/searchSlice";
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
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const searchQuery = useSelector(selectSearchQuery);
  const status = useSelector(selectStatus);
  const category = useSelector(selectCategory);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({ category: "movie", searchQuery: searchQuery })
      );
    } else {
      dispatch(fetchPopularMovies({ category: "movie" }));
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    dispatch(setCategory("movies"));
    dispatch(setSearchQuery(""));
  }, [dispatch, category]);

  return (
    <Container>
      {status !== "error" && (
        <Header>
          {!searchQuery
            ? `Popular movies`
            : (searchQuery && movies.length) > 0
            ? `Search results for "${searchQuery}" (${movies.length})`
            : `Sorry, there are no results for "${searchQuery}"`}
        </Header>
      )}
      {
        {
          loading: <p>Loading...</p>, //Just to demo status pages
          error: <Error />,
          success: (
            <>
              {movies.length > 0 ? (
                <>
                  <Content>
                    {movies?.map((movie) => (
                      <SmallTile key={nanoid()} movie={movie} />
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
                </>
              ) : (
                <NoResult /> //Just to demo no results page
              )}
            </>
          ),
        }[status]
      }
    </Container>
  );
}
