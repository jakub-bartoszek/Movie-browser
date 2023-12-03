import styled from "styled-components";

export const Container = styled.div`
 max-width: 1400px;
 padding: 0 16px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
	height: 100%;
`;

export const Header = styled.h1`
	font-size: 36px;
	font-weight: 600;
	line-height: 120%;
	margin: 56px 0px 24px 0px;

	@media (max-width: ${({ theme }) => theme.breakpoints.l}) {
		margin: 36px 0 24px 0;
		font-size: 24px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.s}) {
		margin: 24px 0 12px 0;
		font-size: 18px;
	}
`;

export const Content = styled.div`
 display: grid;
 justify-content: center;
 grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
 gap: 24px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
		grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
 }
`;
