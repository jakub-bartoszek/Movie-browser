import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../assets/icons/star.svg";
import { ReactComponent as PictureIcon } from "../../../../assets/icons/picture.svg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 324px;
	padding: 16px;
	box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};
	gap: 16px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		height: auto;
		flex-direction: row;
		width: 100%;
	}
`;

export const ImageWrapper = styled.div`
	border-radius: 5px;
	width: 292px;
	min-width: 292px;
	height: 434px;
	min-height: 434px;
	background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 114px;
		min-width: 114px;
		height: 169px;
		min-height: 169px;
	}
`;

export const StyledPictureIcon = styled(PictureIcon)`
	width: 48px;
	color: ${({ theme }) => theme.colors.tile.background};
`;

export const Image = styled.img`
	border-radius: 5px;
	height: 100%;
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 16px;
		font-weight: 500;
		justify-content: start;
	}
`;

export const MovieInfo = styled.div``;

export const TileHeader = styled.header`
	font-size: 22px;
	font-weight: 500;
	line-height: 130%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const Year = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 150%;
	color: ${({ theme }) => theme.colors.tile.mutedText};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		margin-top: 4px;
		font-size: 13px;
		line-height: 130%;
	}
`;

export const Rating = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	font-size: 16px;
	line-height: 150%;
	margin-top: 16px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 13px;
		line-height: 130%;
		margin-top: 8px;
		gap: 8px;
	}
`;

export const IconStar = styled(StarIcon)`
	width: 24px;
	height: 24px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 16px;
		height: 16px;
	}
`;

export const Rate = styled.span`
	font-weight: 600;
`;

export const Votes = styled.span`
	color: ${({ theme }) => theme.colors.tile.mutedText};
`;
