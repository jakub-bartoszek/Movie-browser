import styled from "styled-components";

export const Container = styled.div`
 max-width: 1400px;
 padding: 0 16px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 height: 100%;
`;

export const Content = styled.div`
 display: grid;
 justify-content: center;
`;

export const Section = styled.section`
 display: grid;
 justify-content: center;
 grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
 gap: 24px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
  grid-template-columns: repeat(5, minmax(150px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: repeat(4, minmax(110px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: repeat(3, minmax(110px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  grid-template-columns: repeat(2, minmax(110px, 1fr));
 }
`;

export const SectionTitle = styled.h2`
 margin: 64px 0 32px 0;
 line-height: 120%;
 font-size: 36px;
 font-weight: 600;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 20px;
  margin: 21px 0 12px 0;
 }
`;
