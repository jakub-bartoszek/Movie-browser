import { selectGenres } from "../../../../utils/redux/dataSlice";
import { Genre, Wrapper } from "./styled";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const Genres = ({ genreIds }) => {
	const genres = useSelector(selectGenres);
	const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));

	return (
		<Wrapper>
			{movieGenres.slice(0, 2).map((genre) => (
				<Genre key={nanoid()}>{genre.name}</Genre>
			))}
		</Wrapper>
	);
};