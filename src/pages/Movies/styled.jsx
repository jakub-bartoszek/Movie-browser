import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../../assets/icons/left.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import { NavLink } from "react-router-dom";

export const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.site.text};
  transition: 1s;
  &:hover {
    filter: brightness(110%); 
    box-shadow: -1px 2px 7px 8px rgba(148, 255, 249, 1);
  }
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  margin-top: 56px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 16px;
    margin-top: 24px;
  }
`;

export const Header = styled.h1`
  font-size: 26px;
  font-weight: 600;
  line-height: 120%;
  margin-left: 16px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
  }
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
  gap: 12px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    gap: 8px;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 5px;
  border: none;
  background: var(--Grey, #e4e6f0);

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 8px 12px;
    gap: 8px;
  }
`;
