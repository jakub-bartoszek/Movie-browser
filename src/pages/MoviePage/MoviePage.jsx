import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import { Tile } from "../../components/common/Tile/Tile";
import {
  MainWrapper,
  Header,
  Wrapper,
  Section,
  SectionTitle,
  LongTitle,
  Rating,
  Rate,
  IconStar,
  Votes,
  RatingTopContent,
} from "./styled";

export default function MoviePage() {
  const actorName = "Liu Yifei";
  const actorFilmName = "Mulan";
  return (
    <>
      <MainWrapper>
        <Header>
          <RatingTopContent>
            <LongTitle> Long title</LongTitle>
            <Rating>
              <IconStar />
              7,8
              <Rate>/ 10</Rate>
              <Votes>335 votes</Votes>
            </Rating>
          </RatingTopContent>
        </Header>
      </MainWrapper>

      <Wrapper>
        <Tile />
        <SectionTitle>Cast</SectionTitle>
        <Section>
          {[...Array(8)].map((_, index) => (
            <SmallTile
              key={index}
              showExtraContent={false}
              wrapperStyle={true}
              imageStyle={true}
              actorName={actorName}
              actorFilmName={actorFilmName}
            />
          ))}
        </Section>
        <SectionTitle>Crew</SectionTitle>
        <Section>
          {[...Array(8)].map((_, index) => (
            <SmallTile
              key={index}
              showExtraContent={false}
              wrapperStyle={true}
              imageStyle={true}
              actorName={actorName}
              actorFilmName={actorFilmName}
            />
          ))}
        </Section>
      </Wrapper>
    </>
  );
}
