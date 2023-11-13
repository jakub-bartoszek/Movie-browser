import poster from "../../../../assets/images/poster.png";
import {
  Content,
  TileHeader,
  Genre,
  Genres,
  IconStar,
  Image,
  Rating,
  Rate,
  Votes,
  Subtitle,
  Wrapper,
} from "./styled";

export const SmallTile = ({
  showExtraContent = true,
  wrapperStyle = false,
  imageStyle = false,
  actorFilmName = null,
  actorName = null,
}) => {
  return (
    <Wrapper
      className={showExtraContent ? "" : "no-media-query"}
      wrapperStyle={wrapperStyle}
    >
      <Image src={poster} alt="" imageStyle={imageStyle} />
      {showExtraContent ? (
        <Content>
          <TileHeader actorName={actorName}>Mulan</TileHeader>
          <Subtitle actorFilmName={actorName}>2020</Subtitle>
          <Genres>
            <Genre>Action</Genre>
            <Genre>Action</Genre>
          </Genres>
          <Rating>
            <IconStar />
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
          </Rating>
        </Content>
      ) : (
        <Content>
          {actorName && <TileHeader>{actorName}</TileHeader>}
          {actorFilmName && <Subtitle>{actorFilmName}</Subtitle>}
        </Content>
      )}
    </Wrapper>
  );
};
