import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Pagination,
  StyledLeftIcon,
  StyledRightIcon,
  Text,
} from "../Movies/styled";
import { Container, Content, Header } from "./styled";
import {
  fetchPopularPeople,
  fetchSearchResults,
  selectPeople,
  selectStatus,
  selectTotalPages,
  selectPage,
  setPage,
} from "../../utils/redux/peopleSlice";
import {
  selectCategory,
  selectSearchQuery,
  setCategory,
  setSearchQuery,
} from "../../utils/redux/searchSlice";
import { nanoid } from "nanoid";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { useEffect } from "react";

export default function People() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({
          category: "person",
          searchQuery: searchQuery,
          page: page,
        })
      );
    } else {
      dispatch(fetchPopularPeople({ category: "person", page: page }));
    }
  }, [searchQuery, dispatch, page]);

  useEffect(() => {
    dispatch(setCategory("people"));
    dispatch(setSearchQuery(""));
    dispatch(setPage(1));
  }, [dispatch, category]);

  const prevPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(page - 1));
    }
  };

  const nextPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const firstPageHandler = () => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  const lastPageHandler = () => {
    if (page !== totalPages) {
      dispatch(setPage(totalPages));
    }
  };

  console.log(totalPages);

  return (
    <Container>
      {status !== "error" && (
        <Header>
          {!searchQuery
            ? `Popular people`
            : (searchQuery && people.length) > 0
            ? `Search results for "${searchQuery}" (${people.length})`
            : `Sorry, there are no results for "${searchQuery}"`}
        </Header>
      )}
      {
        {
          loading: <StyledLoader />,
          error: <Error />,
          success: (
            <>
              {people.length > 0 ? (
                <>
                  <Content>
                    {people?.map((member) => (
                      <PersonTile key={nanoid()} member={member} />
                    ))}
                  </Content>
                  <Pagination>
                    {page === 1 ? (
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
                      <Text>Page</Text> <strong>{page}</strong> <Text>of</Text>{" "}
                      <strong>{totalPages}</strong>
                    </span>
                    {page === totalPages ? (
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
