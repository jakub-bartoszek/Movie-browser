import styled from "styled-components";
import { ReactComponent as star } from "../../../../assets/icons/star.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  gap: 16px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 292px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 114px;
  }
`;

export const Content = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

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
  color: var(--Darker-grey, #7e839a);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-top: 4px;
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Genres = styled.ul`
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
  font-family: Poppins;
  font-size: 14px;

  line-height: 140%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 110%;
  }
`;

export const Rating = styled.div`
  margin-top: 39px;
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 16px;
  line-height: 150%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 13px;
    line-height: 130%;
    margin-top: 8px;
    gap: 8px;
  }
`;

export const IconStar = styled(star)`
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
  color: var(--Darker-grey, #7e839a);
`;
