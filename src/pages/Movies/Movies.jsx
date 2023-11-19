import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import {
	fetchPopularMovies,
	fetchSearchResults,
	selectMovies,
	selectSearchQuery,
	selectStatus
} from "../../utils/redux/moviesSlice";
import { nanoid } from "nanoid";

import {
	Button,
	Container,
	Content,
	Header,
	Pagination,
	StyledLeftIcon,
	StyledRightIcon
} from "./styled";
import { NavLink } from "react-router-dom";
import { toMoviePage } from "../../routes";

export default function Movies() {
	const dispatch = useDispatch();
	const movies = useSelector(selectMovies);
	const searchQuery = useSelector(selectSearchQuery);
	const status = useSelector(selectStatus);

	useEffect(() => {
		if (searchQuery) {
			dispatch(fetchSearchResults(searchQuery));
		} else {
			dispatch(fetchPopularMovies());
		}
	}, [searchQuery, dispatch]);


	return (
		<Container>
			<Header>Popular movies</Header>
			<Content>
				{movies.map((movie) => (
					<NavLink to={toMoviePage({ id: movie.id })} key={movie.id}>
						<SmallTile
							movie={movie}
						/>
					</NavLink>

				))}
			</Content>
			<Pagination>
				<Button>
					<StyledLeftIcon />
					<StyledLeftIcon />
				</Button>
				<Button>
					<StyledLeftIcon />
				</Button>
				<span>
					Page <strong>1</strong> of <strong>500</strong>
				</span>
				<Button>
					<StyledRightIcon />
				</Button>
				<Button>
					<StyledRightIcon />
					<StyledRightIcon />
				</Button>
			</Pagination>
		</Container >
// 			{status !== "error" && (
// 				<Header>
// 					{!searchQuery
// 						? `Popular movies`
// 						: (searchQuery && movies.length) > 0
// 						? `Search results for "${searchQuery}" (${movies.length})`
// 						: `Sorry, there are no results for "${searchQuery}"`}
// 				</Header>
// 			)}
// 			{
// 				{
// 					loading: <p>Loading...</p>, //Just to demo status pages
// 					error: <p>Error!</p>,
// 					success: (
// 						<>
// 							{movies.length > 0 ? (
// 								<>
// 									<Content>
// 										{movies?.map((movie) => (
// 											<SmallTile
// 												key={nanoid()}
// 												movie={movie}
// 											/>
// 										))}
// 									</Content>
// 									<Pagination>
// 										<Button>
// 											<StyledLeftIcon />
// 											<StyledLeftIcon />
// 										</Button>
// 										<Button>
// 											<StyledLeftIcon />
// 										</Button>
// 										<span>
// 											Page <strong>1</strong> of <strong>500</strong>
// 										</span>
// 										<Button>
// 											<StyledRightIcon />
// 										</Button>
// 										<Button>
// 											<StyledRightIcon />
// 											<StyledRightIcon />
// 										</Button>
// 									</Pagination>
// 								</>
// 							) : (
// 								<div>No results</div> //Just to demo no results page
// 							)}
// 						</>
// 					)
// 				}[status]
// 			}
// 		</Container>
// 	);
// }
