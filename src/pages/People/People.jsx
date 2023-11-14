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
  fetchPeopleSearchResults,
  fetchPopularPeople,
  selectPeople,
  selectSearchPeopleQuery,
} from "../../utils/redux/peopleSlice";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function People() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const searchPeopleQuery = useSelector(selectSearchPeopleQuery);

  useEffect(() => {
    if (searchPeopleQuery) {
      dispatch(fetchPeopleSearchResults(searchPeopleQuery));
    } else {
      dispatch(fetchPopularPeople());
    }
  }, [searchPeopleQuery, dispatch]);

  return (
    <Container>
      <Header>Popular people</Header>
      <Content>
        {people.map((member) => (
          <PersonTile member={member} />
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
