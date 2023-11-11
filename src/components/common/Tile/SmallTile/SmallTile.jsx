import poster from "../images/poster.png";
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
	Year,
	Wrapper
} from "./styled";

export const SmallTile = () => {
	return (
		<Wrapper>
			<Image
				src={poster}
				alt=""
			/>
			<Content>
				<TileHeader>Mulan</TileHeader>
				<Year>2020</Year>
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
		</Wrapper>
	);
};
