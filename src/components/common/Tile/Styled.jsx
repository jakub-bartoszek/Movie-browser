import styled from "styled-components";

export const Container = styled.div`
   background-color:#FFFFFF ;
   max-width: 1368px;
   padding: 40px;
   box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
   display: grid;
   grid-template-columns: auto 1fr;
   gap: 40px;
`;
export const Image = styled.img`
   max-width: 312px;
   max-height: 464px;
   border-radius: 5px;
`;

export const Content = styled.div`
padding: 8px 0;

`;

export const Header = styled.header`
   color:#000;
   font-size: 36px;
   margin-bottom: 24px;
`;

export const Year = styled.p`
font-size: 22px;
margin-bottom: 24px;
`;

export const Release = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
  
`;
export const ReleaseDate = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
`;
export const GreyRelease = styled.span`
   color: #74788B;
   margin-right: 5px;
   display: block;
`;