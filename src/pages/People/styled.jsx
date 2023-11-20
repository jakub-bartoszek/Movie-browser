import styled from "styled-components";

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
  grid-template-columns: repeat(auto-fill, 208px);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
  }
`;
