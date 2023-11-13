import { Image, ImageWrapper, Character, Text, Wrapper } from "./styled";
import poster from "../../../../assets/images/poster.png";

export const PersonTile = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={poster} alt="" />
      </ImageWrapper>
      <Character>
        <Text>Lorem Ipsum</Text>
      </Character>
    </Wrapper>
  );
};
