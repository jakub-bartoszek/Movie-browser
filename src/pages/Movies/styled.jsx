import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../../assets/icons/left.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: ${({ theme }) => theme.colors.site.text};
 transition: 1s;
 
 &:hover {
  box-shadow: -1px 2px 7px 8px rgba(148, 255, 249, 1);
 }
`;

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
 grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
 gap: 24px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: 1fr;
 }
`;

export const Pagination = styled.div`
 margin: 40px 0;
 display: flex;
 justify-content: center;
 gap: 12px;
 align-items: center;
 font-size: 14px;
 font-weight: 400;
 line-height: 140%;
 padding-bottom: 32px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 8px;
 }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.pagination.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.colors.pagination.background};
  &:disabled path {
    fill: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 12px 20px;
    gap: 8px;
    p {
      display: none;
    }
  }
`;

export const StyledLeftIcon = styled(LeftIcon)`
 width: 7px;
 height: 11px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  width: 5px;
  height: 8px;
 }
`;

export const StyledRightIcon = styled(RightIcon)`
 width: 7px;
 height: 11px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  width: 5px;
  height: 8px;
 }
`;
