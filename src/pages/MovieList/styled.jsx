import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-self: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    align-items: center;
  }
`;

export const Header = styled.span`
  display: flex;
  align-self: flex-start;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 18px;
  }
`;

export const TilesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

export const Tile = styled.div`
  display: flex;
  padding: 16px;
  width: 324px;
  border-radius: 5px;
  flex-shrink: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 360px;
    height: 260px;
    display: flex;
    padding: 16px;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
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
