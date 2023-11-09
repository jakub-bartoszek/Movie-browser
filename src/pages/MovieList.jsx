import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies, selectMovies } from "../redux/moviesSlice";

export default function MovieList() {
	const dispatch = useDispatch();

	const movies = useSelector(selectMovies);

	useEffect(() => {
		if (movies.length === 0) {
			dispatch(fetchMovies());
			console.log(movies);
		}
	});

	return (
		<div>
			<button onClick={() => dispatch(fetchMovies())}>
				Pobierz przykładowe zadania
			</button>
		</div>
	);
}
