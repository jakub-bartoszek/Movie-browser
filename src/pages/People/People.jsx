import { useDispatch, useSelector } from "react-redux";
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
  selectSearchPage,
  selectSearchQuery,
  selectSearchTotalPages,
  setCategory,
  setSearchQuery,
} from "../../utils/redux/searchSlice";
import { nanoid } from "nanoid";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { useEffect } from "react";
import { PaginationPeople } from "../../components/common/Navigation/Pagination/PaginationPeople";

export default function People() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const searchPage = useSelector(selectSearchPage);
  const searchTotalPages = useSelector(selectSearchTotalPages);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({
          category: "person",
          searchQuery: searchQuery,
          page: searchPage,
        })
      );
    } else {
      dispatch(fetchPopularPeople({ category: "person", page: page }));
    }
  }, [searchQuery, dispatch, page, searchPage]);

  useEffect(() => {
    dispatch(setCategory("people"));
    dispatch(setSearchQuery(""));
    dispatch(setPage(1));
  }, [dispatch, category]);

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
                  <PaginationPeople
                    page={page}
                    totalPages={totalPages}
                    searchPage={searchPage}
                    searchTotalPages={searchTotalPages}
                    searchQuery={searchQuery}
                  />
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
