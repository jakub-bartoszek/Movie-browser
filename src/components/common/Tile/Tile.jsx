import {
	Container,
	Content,
	Title,
	Image,
	Year,
	Release,
	Genres,
	Genre,
	Rating,
	IconStar,
	Rate,
	Votes,
	Discription,
	ImageWrapper,
	Production,
	OutOf,
	ReleaseDate
} from "./styled";

export const Tile = ({
	poster_path,
	title,
	release_date,
	production_countries,
	vote_average,
	votes,
	overview,
	genres
}) => {
	const isMobile = window.innerWidth < 767;
	const countryNames =
		production_countries?.map((country) =>
			isMobile ? country.iso_3166_1 : country.name
		) || [];
	const releaseDate = new Date(release_date);
	const year = releaseDate.getFullYear().toString();

	return (
		<Container>
			<ImageWrapper>
				<Image
					src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					alt=""
				/>
			</ImageWrapper>
			<Content>
				<Title>{title}</Title>
				<Year>{year}</Year>
				<Release>
					<Production>{countryNames?.toString().replace(",", ", ")}</Production>
					<ReleaseDate>{release_date?.toString().replaceAll("-", ".")}</ReleaseDate>
				</Release>
				<Genres>
					{genres &&
						genres.map((genre) => <Genre key={genre.id}>{genre.name}</Genre>)}
				</Genres>

				{vote_average ? (
					<Rating>
						<IconStar />
						<Rate>{vote_average?.toFixed(2).toString().replace(".", ",")}</Rate>
						<OutOf>/ 10</OutOf>
						<Votes>{votes} votes</Votes>
					</Rating>
				) : (
					<Votes>No votes</Votes>
				)}
			</Content>
			<Discription>{overview}</Discription>
		</Container>
	);
};
