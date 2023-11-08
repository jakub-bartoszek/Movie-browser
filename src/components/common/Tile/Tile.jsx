import {
  Container,
  Content,
  Header,
  Image,
  Year,
  Release,
  ReleaseDate,
  GreyRelease
} from "./Styled"
import poster from "./images/poster.png"

export const Tile = () => {
  return (
    <>
      <Container>
        <Image src={poster} alt="" />
        <Content>
          <Header> Mulan</Header>
          <Year> 2020 </Year>
          <Release>
            <GreyRelease>Production: </GreyRelease>
            China, United States of America
          </Release>
          <ReleaseDate>
            <GreyRelease>Release date:</GreyRelease>
            24.10.2020
          </ReleaseDate>
        </Content>
      </Container>
    </>
  );
};