import styled from "styled-components";

export const Container = styled.div`
	max-width: 1368px;
	margin: 0 auto;
	display: flex;
	margin-top: 50px;
	flex-direction: column;
	justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 16px;
	}
`;

export const Header = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 26px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;

`;

export const Content = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 324px);
	gap: 24px;

	@media (max-width: ${({ theme }) => theme.breakpoints.s}) {
		grid-template-columns: 1fr;
	}
`;

export const Pagination = styled.div`
	margin: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	margin: 0 12px;
	display: flex;
	padding: 8px 16px;
	align-items: center;
	gap: 8px;
	border: none;
	border-radius: 5px;
	background: var(--Grey, #e4e6f0);
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		font-size: 12px;
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 13px;
	}
`;
