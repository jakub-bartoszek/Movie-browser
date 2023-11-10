import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import {
	Button,
	Container,
	Content,
	Header,
	Pagination,
	Tile,
	TilesRow
} from "./styled";

export default function MovieList() {
	return (
		<Container>
			<Header>Popular movies</Header>
			<Content>
				<SmallTile />
				<SmallTile />
				<SmallTile />
				<SmallTile />
				<SmallTile />
				<SmallTile />
				<SmallTile />
				<SmallTile />
			</Content>
			<Pagination>
				<Button>First</Button>
				<Button>Previous</Button>
				<span>
					Page <strong>1</strong> of <strong>500</strong>
				</span>
				<Button>Next</Button>
				<Button>Last</Button>
			</Pagination>
		</Container>
	);
}
