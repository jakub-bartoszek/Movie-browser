import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 208px;
   height: 339px;
   padding: 16px;
   box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};
   gap: 12px;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
   }
 `;

export const ImageWrapper = styled.div`
   border-radius: 5px;
   width: 177px;
   min-width: 177px;
   height: 264px;
   min-height: 264px;
   background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
   display: flex;
   align-items: center;
   justify-content: center;

   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
     /* width: 114px;
     min-width: 114px;
     height: 169px;
     min-height: 169px; */
   }
 `;

export const Image = styled.img`
   border-radius: 5px;
   height: 100%;
   width: 100%;
 `;

export const Character = styled.div`
   display: flex;
   height: 64px;
   align-items: flex-start;
   justify-content: center;
   gap: 10px;
 `;

export const Name = styled.p`
   font-size: 22px;
   text-align: center;
   font-style: normal;
   font-weight: 500;
   line-height: 130%;
 `;