import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
 max-width: 1400px;
 padding: 0 16px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 height: 100%;
`;

export const StyledNav = styled(NavLink)`
 text-decoration: none;
 color: ${({ theme }) => theme.colors.site.text};
 transition: 1s;

 &:hover {
  box-shadow: -1px 2px 7px 8px rgba(148, 255, 249, 1);
 }
`;

export const Section = styled.section`
 display: grid;
 justify-content: center;
 grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
 gap: 24px;
 padding-bottom: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: 1fr;
  gap: 16px;
 }
`;

export const SectionTitle = styled.h2`
 font-size: 36px;
 font-weight: 600;
 margin: 64px 0 24px 0;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  margin: 0 16px;
 }
`;
