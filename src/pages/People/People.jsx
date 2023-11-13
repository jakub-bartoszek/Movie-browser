import { PersonTile } from "../../components/common/Tile/PersonTile/PersonTile";
import {
  Button,
  Pagination,
  StyledLeftIcon,
  StyledRightIcon,
} from "../Movies/styled";
import { Container, Content, Header } from "./styled";

export default function People() {
  return (
    <Container>
      <Header>Popular people</Header>
      <Content>
        <PersonTile />
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
