import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../assets/icons/video.svg";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
 background-color: ${({ theme }) => theme.colors.navigation.background};
 width: 100%;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  background-color: ${({ theme }) => theme.colors.navigation.mobileBackground};
 }
`;

export const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 16px;
 margin: 0 auto;
 max-width: 1368px;
 padding: 23px 16px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  flex-direction: column;
 }
`;

export const Container = styled.div`
 display: flex;
 flex-grow: 2;
 gap: 80px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  justify-content: space-between;
  gap: 16px;
 }
`;

export const Logo = styled(NavLink)`
 display: flex;
 align-items: center;
 gap: 12px;
 text-decoration: none;
`;

export const StyledVideoIcon = styled(VideoIcon)`
 height: 40px;
 width: 40px;
 color: ${({ theme }) => theme.colors.navigation.text};

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  height: 17px;
  width: 17px;
 }
`;

export const Title = styled.div`
 color: ${({ theme }) => theme.colors.navigation.text};
 font-size: 24px;
 font-weight: 500;
 line-height: 40px;
 letter-spacing: -1.5px;
 white-space: nowrap;
 text-transform: capitalize;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 13px;
 }
`;

export const StyledUl = styled.div`
 display: flex;
 gap: 16px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 12px;
 }
`;

export const StyledLi = styled.div`
 display: flex;
`;

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 color: ${({ theme }) => theme.colors.navigation.text};
 display: flex;
 align-items: center;
 padding: 8px 24px;
 border-radius: 1px solid white;
 border-radius: 24px;
 font-size: 14px;
 font-weight: 600;
 text-transform: uppercase;

 &.active {
  outline: 1px solid white;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
  padding: 8px 12px;
 }
`;
