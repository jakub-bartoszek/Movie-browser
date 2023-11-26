import { useEffect, useState } from "react";
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

import {
  Button,
  Container,
  Content,
  Header,
  Pagination,
  StyledLeftIcon,
  StyledNav,
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

  const isMobile = window.innerWidth < 767;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 6 : 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleItems = movies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPageHandler = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const lastPageHandler = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(totalPages);
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
                    {visibleItems?.map((movie) => (
                      <StyledNav
                        to={toMoviePage({ id: movie.id })}
                        key={movie.id}
                      >
                        <SmallTile movie={movie} />
                      </StyledNav>
                    ))}
                  </Content>
                  <Pagination>
                    {currentPage === 1 ? (
                      <>
                        <Button disabled>
                          <StyledLeftIcon disabled />
                          <StyledLeftIcon disabled />
                          <p>First</p>
                        </Button>

                        <Button disabled>
                          <StyledLeftIcon disabled />
                          <p>Previous</p>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={firstPageHandler}>
                          <StyledLeftIcon />
                          <StyledLeftIcon />
                          <p>First</p>
                        </Button>
                        <Button onClick={prevPageHandler}>
                          <StyledLeftIcon />
                          <p>Previous</p>
                        </Button>
                      </>
                    )}
                    <span>
                      <Text>Page</Text> <strong>{currentPage}</strong>{" "}
                      <Text>of</Text> <strong>{totalPages}</strong>
                    </span>
                    <PaginationUI
                      itemsPerPage={itemsPerPage}
                      totalItems={movies.length}
                    ></PaginationUI>
                    {currentPage === totalPages ? (
                      <>
                        <Button disabled>
                          <p>Next</p>
                          <StyledRightIcon disabled />
                        </Button>
                        <Button disabled>
                          <p>Last</p>
                          <StyledRightIcon disabled />
                          <StyledRightIcon disabled />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={nextPageHandler}>
                          <p>Next</p>
                          <StyledRightIcon />
                        </Button>
                        <Button onClick={lastPageHandler}>
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
