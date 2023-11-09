import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";

export default function MovieList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	});

	return <div>MovieList</div>;
}
