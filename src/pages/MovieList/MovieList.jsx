import { useEffect, useState } from "react";
import { SmallTile } from "../../components/common/Tile/SmallTile/SmallTile";
import {
	Button,
	Container,
	Content,
	Header,
	Pagination,
	StyledLeftIcon,
	StyledRightIcon
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
