import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import {
  fetchPopularMovies,
  fetchSearchResults,
  selectMovies,
  selectStatus,
  setPage,
  selectPage,
  selectTotalPages,
} from "../../utils/redux/moviesSlice";
import {
  selectCategory,
  selectSearchPage,
  selectSearchQuery,
  selectSearchTotalPages,
  setCategory,
  setSearchPage,
  setSearchQuery,
} from "../../utils/redux/searchSlice";

import {
  Button,
  Container,
  Content,
  Header,
  Pagination,
  StyledLeftIcon,
  StyledLink,
  StyledRightIcon,
  Text,
} from "./styled";
import { toMoviePage } from "../../routes";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const searchQuery = useSelector(selectSearchQuery);
  const status = useSelector(selectStatus);
  const category = useSelector(selectCategory);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const searchPage = useSelector(selectSearchPage);
  const searchTotalPages = useSelector(selectSearchTotalPages);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({
          category: "movie",
          searchQuery: searchQuery,
          page: searchPage,
        })
      );
    } else {
      dispatch(fetchPopularMovies({ category: "movie", page: page }));
    }
  }, [searchQuery, page, searchPage, dispatch]);

  useEffect(() => {
    dispatch(setCategory("movies"));
    dispatch(setSearchQuery(""));
    dispatch(setPage(1));
  }, [dispatch, category]);

  const prevPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(page - 1));
    }
  };

  const prevSearchPageHandler = () => {
    if (searchPage !== 1) {
      dispatch(setSearchPage(searchPage - 1));
    }
  };

  const nextPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const nextSearchPageHandler = () => {
    if (searchPage !== searchTotalPages) {
      dispatch(setSearchPage(searchPage + 1));
    }
  };

  const firstPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  const firstSearchPageHandler = () => {
    if (searchPage !== 1) {
      dispatch(setSearchPage(1));
    }
  };

  const lastPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(totalPages));
    }
  };

  const lastSearchPageHandler = () => {
    if (searchPage !== searchTotalPages) {
      dispatch(setSearchPage(searchTotalPages));
    }
  };

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
          loading: <StyledLoader />,
          error: <Error />,
          success: (
            <>
              {movies.length > 0 ? (
                <>
                  <Content>
                    {movies?.map((movie) => (
                      <StyledLink
                        to={toMoviePage({ id: movie.id })}
                        key={movie.id}
                      >
                        <SmallTile movie={movie} />
                      </StyledLink>
                    ))}
                  </Content>
                  <Pagination>
                    {page && searchPage === 1 ? (
                      <>
                        <Button disabled>
                          <StyledLeftIcon />
                          <StyledLeftIcon />
                          <p>First</p>
                        </Button>
                        <Button disabled>
                          <StyledLeftIcon />
                          <p>Previous</p>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={
                            !searchQuery
                              ? firstPageHandler
                              : firstSearchPageHandler
                          }
                        >
                          <StyledLeftIcon />
                          <StyledLeftIcon />
                          <p>First</p>
                        </Button>
                        <Button
                          onClick={
                            !searchQuery
                              ? prevPageHandler
                              : prevSearchPageHandler
                          }
                        >
                          <StyledLeftIcon />
                          <p>Previous</p>
                        </Button>
                      </>
                    )}
                    {searchQuery ? (
                      <span>
                        <Text>Page</Text> <strong>{searchPage}</strong>{" "}
                        <Text>of</Text> <strong>{searchTotalPages}</strong>
                      </span>
                    ) : (
                      <span>
                        <Text>Page</Text> <strong>{page}</strong>{" "}
                        <Text>of</Text> <strong>{totalPages}</strong>
                      </span>
                    )}
                    {page === totalPages && searchPage === searchTotalPages ? (
                      <>
                        <Button disabled>
                          <p>Next</p>
                          <StyledRightIcon disabled />
                        </Button>
                        <Button disabled>
                          <p>Last</p>
                          <StyledRightIcon />
                          <StyledRightIcon />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={
                            !searchQuery
                              ? nextPageHandler
                              : nextSearchPageHandler
                          }
                        >
                          <p>Next</p>
                          <StyledRightIcon />
                        </Button>
                        <Button
                          onClick={
                            !searchQuery
                              ? lastPageHandler
                              : lastSearchPageHandler
                          }
                        >
                          <p>Last</p>
                          <StyledRightIcon />
                          <StyledRightIcon />
                        </Button>
                      </>
                    )}
                  </Pagination>
                </>
              ) : (
                <NoResult />
              )}
            </>
          ),
        }[status]
      }
    </Container>
  );
}
