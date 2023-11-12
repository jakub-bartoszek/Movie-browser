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
  IconStar,
  Rate,
  Votes,
  Discription,
<<<<<<< HEAD
} from "./styled"
import poster from "./images/poster.png";
=======
} from "./styled";
import poster from "../../../assets/images/poster.png";
>>>>>>> 6aa77df65c5751e71f48388f4d33b41188be0c1c

export const Tile = () => {
  const isMobile = window.innerWidth < 800;
  return (
    <Container>
      <Image src={poster} alt="" />
      <Content>
        <Header>Mulan</Header>
        <Year>2020</Year>
        <Release>
          <GreyRelease>Production:</GreyRelease>
          {isMobile ? "China, USA " : "China, United States of America"}
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
          <IconStar />
          7,8
          <Rate>/ 10</Rate>
          <Votes>335 votes</Votes>
        </Rating>
      </Content>
      <Discription>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father. Disguises herself as a male warrior in order to save
        her father. A young Chinese maiden disguises herself as a male warrior
        in order to save her father.
      </Discription>
    </Container>
  );
};
