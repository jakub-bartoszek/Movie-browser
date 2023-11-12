import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies, selectMovies } from "../redux/moviesSlice";
import { nanoid } from "nanoid";

export default function MovieList() {
	const dispatch = useDispatch();

	const movies = useSelector(selectMovies);

	useEffect(() => {
		console.log(movies);
	}, [movies]);

	return (
		<div>
			<button onClick={() => dispatch(fetchMovies())}>
				Pobierz przykładowe zadania
			</button>
			<ul>
				{movies.map((movie) => (
					<li key={nanoid()}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
}
