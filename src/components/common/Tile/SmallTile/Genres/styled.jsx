import styled from "styled-components";

export const Wrapper = styled.ul`
	margin-top: 8px;
	display: flex;
	list-style: none;
	padding-left: 0px;
	gap: 10px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		gap: 8px;
	}
`;

export const Genre = styled.li`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	border-radius: 5px;
	background: #e4e6f0;
	font-size: 14px;
	line-height: 140%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		padding: 4px 8px;
		font-size: 10px;
		line-height: 110%;
	}
`;