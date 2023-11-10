import poster from "../images/poster.png";
import {
  Description,
  TileHeader,
  Genre,
  Genres,
  IconStar,
  Image,
  Rating,
  Rate,
  Votes,
  Year,
} from "./styled";

export const SmallTile = () => {
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
