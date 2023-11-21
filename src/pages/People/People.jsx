import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../components/common/Tile/PersonTile/PersonTile";
import {
  Button,
  Pagination,
  StyledLeftIcon,
  StyledRightIcon,
} from "../Movies/styled";
import { Container, Content, Header } from "./styled";
import {
  fetchPopularPeople,
  fetchSearchResults,
  selectPeople,
  selectStatus,
} from "../../utils/redux/peopleSlice";
import {
  selectCategory,
  selectSearchQuery,
  setCategory,
  setSearchQuery,
} from "../../utils/redux/searchSlice";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";

export default function People() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);
  const searchQuery = useSelector(selectSearchQuery);
  const category = useSelector(selectCategory);

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchSearchResults({ category: "person", searchQuery: searchQuery })
      );
    } else {
      dispatch(fetchPopularPeople({ category: "person" }));
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    dispatch(setCategory("people"));
    dispatch(setSearchQuery(""));
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
          loading: <p>Loading...</p>, //Just to demo status pages
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
                <NoResult />
              )}
            </>
          ),
        }[status]
      }
    </Container>
  );
}
