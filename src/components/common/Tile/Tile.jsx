import {
  Container,
  Content,
  Header,
  Image,
  Year,
  Release,
  ReleaseDate,
  GreyRelease,
  Genres,
  Genre,
  Rating,
  Icon,
  Rate,
  Votes,
  Discription,
} from "./Styled"
import poster from "./images/poster.png";
import icon from "./images/shape-star.png"

export const Tile = () => {
  return (
    <>
      <Container>
        <Image src={poster} alt="" />
        <Content>
          <Header>Mulan</Header>
          <Year>2020</Year>
          <Release>
            <GreyRelease>Production:</GreyRelease>
            China, United States of America
          </Release>
          <ReleaseDate>
            <GreyRelease>Release date:</GreyRelease>
            24.10.2020
          </ReleaseDate>
          <Genres>
            <Genre>Action</Genre>
            <Genre>Advanture</Genre>
            <Genre>Drama</Genre>
          </Genres>
          <Rating>
            <Icon src={icon} alt=""></Icon>7,8
            <Rate>/ 10</Rate>
            <Votes>335 votes</Votes>
          </Rating>
          <Discription>
            A young Chinese maiden disguises herself as a male warrior in order to save her father.
            Disguises herself as a male warrior in order to save her father.
            A young Chinese maiden disguises herself as a male warrior in order to save her father.
          </Discription>
        </Content>
      </Container>
    </>
  );
};