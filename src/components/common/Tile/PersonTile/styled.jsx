import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 208px;
  height: auto;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};
  gap: 12px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    justify-self: center;
    width: 136px;
    height: 245px;
    gap: 8px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
  align-self: center;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 114px;
    min-width: 114px;
    height: 169px;
    min-height: 169px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const Name = styled.p`
  font-size: 22px;
  text-align: center;
  font-style: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  line-height: 130%;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 14px;
  }
`;
export const FilmName = styled.p`
  color: ${({ theme }) => theme.colors.tile.mutedText};
  font-size: 18px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 13px;
  }
`;