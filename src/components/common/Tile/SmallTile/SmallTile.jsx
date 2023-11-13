import { Genres } from "./Genres/Genres";
import {
	Content,
	TileHeader,
	IconStar,
	Image,
	Rating,
	Rate,
	Votes,
	Year,
	Wrapper,
	ImageWrapper,
	StyledPictureIcon,
	MovieInfo
} from "./styled";

export const SmallTile = ({ movie }) => {
	return (
		<Wrapper>
			<ImageWrapper>
				{movie.poster_path ? (
					<Image
						src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
						alt=""
					/>
				) : (
					<StyledPictureIcon />
				)}
			</ImageWrapper>
			<Content>
				<MovieInfo>
					<TileHeader>{movie.title}</TileHeader>
					<Year>{movie.release_date.slice(0, 4)}</Year>
					<Genres genreIds={movie.genre_ids} />
				</MovieInfo>
				<Rating>
					<IconStar />
					<Rate>{movie.vote_average.toFixed(1)}</Rate>
					<Votes>{movie.vote_count} votes</Votes>
				</Rating>
			</Content>
		</Wrapper>
	);
};
