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

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const visibleItems = movies.slice(indexOfFirstItem, indexOfLastItem);

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
                    <Button onClick={firstPageHandler}>
                      <StyledLeftIcon />
                      <StyledLeftIcon />
                    </Button>
                    <Button onClick={prevPageHandler}>
                      <StyledLeftIcon />
                    </Button>
                    <span>
                      Page <strong>{currentPage}</strong> of{" "}
                      <strong>{totalPages}</strong>
                    </span>
                    <Button onClick={nextPageHandler}>
                      <StyledRightIcon />
                    </Button>
                    <Button onClick={lastPageHandler}>
                      <StyledRightIcon />
                      <StyledRightIcon />
                    </Button>
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
