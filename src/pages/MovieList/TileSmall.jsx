import {
  Description,
  Genre,
  Genres,
  TileHeader,
  IconStar,
  Image,
  Rate,
  Rating,
  Votes,
  Year,
} from "./styled";
import poster from "../../components/common/Tile/images/poster.png";

export const TileSmall = () => {
  return (
    <>
      <Image src={poster} alt="" />
      <Description>
        <TileHeader>Mulan</TileHeader>
        <Year>2020</Year>
        <Genres>
          <Genre>Action</Genre>
        </Genres>
        <Rating>
          <IconStar />
          7,8
          <Rate>/ 10</Rate>
          <Votes>335 votes</Votes>
        </Rating>
      </Description>
    </>
  );
};
