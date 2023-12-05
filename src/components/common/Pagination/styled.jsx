import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../../../assets/icons/left.svg";
import { ReactComponent as RightIcon } from "../../../assets/icons/right.svg";

export const Wrapper = styled.div`
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
