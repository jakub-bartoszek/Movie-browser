import {
  Button,
  Container,
  Content,
  Description,
  Header,
  Image,
  Pagination,
  Rating,
  Tile,
  TilesRow,
} from "./styled";

export default function MovieList() {
  return (
    <>
      <Container>
        <Content>
          <Header>Popular movies</Header>
          <TilesRow>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
          </TilesRow>
          <TilesRow>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
            <Tile>
              <Image />
              <Description>Title/Year</Description>
              <Rating>Rating</Rating>
            </Tile>
          </TilesRow>
        </Content>
        <Pagination>
          <Button>First</Button>
          <Button>Previous</Button>
          <span>
            Page <strong>1</strong> of <strong>500</strong>
          </span>
          <Button>Next</Button>
          <Button>Last</Button>
        </Pagination>
      </Container>
    </>
  );
}
