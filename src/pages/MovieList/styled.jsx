import styled from "styled-components";
import { ReactComponent as star } from "../../assets/star.svg";

export const Container = styled.div`
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
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
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
    display: flex;
    font-size: 18px;
  }
`;

export const TilesRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Tile = styled.div`
  display: flex;
  padding: 5%;
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

export const TileHeader = styled.header`
  font-size: 22px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.ms}) {
    font-size: 16px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 50%;
    height: 100%;
  }
`;

export const Description = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
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

export const Year = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 13px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.tile.mutedText};
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 12px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.tile.mutedText};
  }
`;

export const Release = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 12px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  margin-top: 24px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 8px;
  }
`;

export const Genre = styled.li`
  font-size: 14px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.tile.genresBackground};
  padding: 8px 16px;
  margin: 0 16px 8px 0;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 10px;
    padding: 4px 8px;
    margin: 0 8px 4px 0;
  }
`;

export const Rating = styled.div`
  margin-top: 24px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 13px;
    margin-top: 8px;
  }
`;

export const IconStar = styled(star)`
  margin-right: 8px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 16px;
    width: 16px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    height: 12px;
    width: 12px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 12px;
    width: 12px;
  }
`;

export const Rate = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: 12px;
  margin-left: 8px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  font-weight: 400;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.tile.mutedText};
    margin-left: 7px;
  }
`;
