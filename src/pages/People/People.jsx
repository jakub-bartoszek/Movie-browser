import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../components/common/Tile/PersonTile/PersonTile";
import {
	Button,
	Pagination,
	StyledLeftIcon,
	StyledRightIcon
} from "../Movies/styled";
import { Container, Content, Header } from "./styled";
import {
	fetchPopularPeople,
	fetchSearchResults,
	selectPeople
} from "../../utils/redux/peopleSlice";
import { selectSearchQuery, setCategory, setSearchQuery } from "../../utils/redux/searchSlice";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function People() {
	const dispatch = useDispatch();
	const people = useSelector(selectPeople);
	const searchQuery = useSelector(selectSearchQuery);

	useEffect(() => {
		if (searchQuery) {
			dispatch(
				fetchSearchResults({ category: "person", searchQuery: searchQuery })
			);
		} else {
			dispatch(fetchPopularPeople({ category: "person" }));
		}
	}, [searchQuery, dispatch]);

	useEffect(() => {
		dispatch(setCategory("people"));
		dispatch(setSearchQuery(""));
	});

	return (
		<Container>
			<Header>Popular people</Header>
			<Content>
				{people.map((member) => (
					<PersonTile member={member} />
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
		</Container>
	);
}
