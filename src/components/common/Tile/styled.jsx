import styled from "styled-components";
import { ReactComponent as star } from "../../../assets/icons/star.svg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tile.background};
  max-width: 1368px;
  padding: 40px;
  gap: 40px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 16px;
    padding: 16px;
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;
  grid-row: 1 / span 2;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-row: 1;
    width: 114px;
    height: 169px;
  }
`;

export const Content = styled.div``;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.tile.text};
  font-size: 36px;
  margin-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 120px;
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: 500;
  }
`;

export const Year = styled.p`
  font-size: 22px;
  margin-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 120px;
    font-size: 13px;
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

export const ReleaseDate = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 12px;
  }
`;

export const GreyRelease = styled.span`
  color: ${({ theme }) => theme.colors.tile.mutedText};
  margin-right: 5px;
  display: block;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
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

export const Discription = styled.div`
  font-size: 20px;
  line-height: 160%;
  font-weight: 400;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-column: 1 / span 2;
    font-size: 14px;
    line-height: 160%;
  }
`;
export const ContainerRateText = styled.div`
  align-items: flex-end;
`;
