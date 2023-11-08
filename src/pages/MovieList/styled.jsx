import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  width: fit-content;
  align-self: center;
  display: grid;
  flex-direction: row;
  grid-gap: 10px;
`;

export const Header = styled.span`
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const TilesRow = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.tile.background};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`;

export const Image = styled.img`
  width: 200px;
  height: 250px;
`;

export const Description = styled.div``;

export const Rating = styled.p``;

export const Pagination = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0 12px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 5px;
  background: var(--Grey, #e4e6f0);
`;
