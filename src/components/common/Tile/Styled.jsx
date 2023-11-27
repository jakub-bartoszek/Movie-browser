import styled from "styled-components";
import { ReactComponent as star } from "../../../assets/icons/star.svg";

export const Container = styled.div`
 background-color: ${({ theme }) => theme.colors.tile.background};
 max-width: 1368px;
 padding: 40px;
 gap: 40px;
 box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
 display: grid;
 grid-template-columns: minmax(312px, 1fr) 3fr;
 grid-template-rows: auto auto;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-row: 1;
  grid-template-columns: minmax(114px, 1fr) 1.5fr;
  padding: 16px;
  gap: 16px;
 }
`;

export const ImageWrapper = styled.div`
 background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
 aspect-ratio: 6/9;
 display: flex;
 justify-content: center;
 border-radius: 5px;
 grid-row: 1 / span 2;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-row: 1;
 }
`;

export const Image = styled.img`
 border-radius: 5px;
 width: 100%;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 16px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  gap: 8px;
 }
`;

export const Title = styled.h2`
 font-size: 36px;
 font-weight: 600;
 line-height: 120%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
 }
`;

export const Year = styled.p`
 font-size: 22px;
 line-height: 120%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  margin-top: -4px;
  font-size: 16px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  color: ${({ theme }) => theme.colors.tile.mutedText};
  font-size: 13px;
  line-height: 130%;
 }
`;

export const Release = styled.div`
 font-size: 18px;
 line-height: 120%;
 display: flex;
 flex-direction: column;
 gap: 8px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 12px;
  line-height: 130%;
 }
`;

export const Production = styled.p`
 &::before {
  color: ${({ theme }) => theme.colors.tile.mutedText};
  content: "Production: ";

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
   display: none;
  }
 }
`;

export const ReleaseDate = styled.p`
 &::before {
  color: ${({ theme }) => theme.colors.tile.mutedText};
  content: "Release date: ";

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
   display: none;
  }
 }
`;

export const Genres = styled.ul`
 list-style: none;
 padding-left: 0;
 display: flex;
 flex-wrap: wrap;
 gap: 16px;
 font-size: 14px;
 line-height: 100%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 12px;
  font-size: 12px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  gap: 8px;
  font-size: 10px;
  line-height: 110%;
 }
`;

export const Genre = styled.li`
 background-color: ${({ theme }) => theme.colors.tile.genresBackground};
 padding: 8px 16px;
 border-radius: 5px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  padding: 6px 14px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  padding: 4px 8px;
 }
`;

export const Rating = styled.div`
 display: flex;
 display: flex;
 align-items: center;
`;

export const IconStar = styled(star)`
 width: 24px;
 height: 24px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  width: 20px;
  height: 20px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  width: 16px;
  height: 16px;
 }
`;

export const Rate = styled.div`
 font-size: 22px;
 font-weight: 500;
 line-height: 130%;
 margin-left: 8px;
 display: flex;
 align-items: flex-end;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 16px;
  font-weight: 600;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 11px;
  line-height: 130%;
 }
`;

export const OutOf = styled.div`
 font-size: 14px;
 line-height: 120%;
 margin-left: 8px;
 display: flex;
 align-items: flex-end;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: none;
 }
`;

export const Votes = styled.div`
 font-size: 14px;
 line-height: 120%;
 margin-left: 12px;
 display: flex;
 align-items: flex-end;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 11px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.tile.mutedText};
 }
`;

export const Discription = styled.div`
 font-size: 20px;
 line-height: 160%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
  grid-column: 1 / span 2;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 16px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 14px;
  line-height: 160%;
 }
`;
