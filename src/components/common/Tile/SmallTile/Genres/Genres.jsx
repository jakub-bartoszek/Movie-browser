import { useSelector } from "react-redux";
import { selectGenres } from "../../../../../utils/redux/moviesSlice";
import { Genre, Wrapper } from "./styled";

export const Genres = ({ genreIds }) => {
	const genres = useSelector(selectGenres);
	const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));
	
	return (
		<Wrapper>
			{movieGenres.slice(0, 2).map((genre) => (
				<Genre>{genre.name}</Genre>
			))}
		</Wrapper>
	);
};
