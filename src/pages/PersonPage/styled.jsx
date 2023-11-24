import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tile.background};
  max-width: 1368px;
  /* padding: 40px;
  gap: 40px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto; */
  display: flex;
  flex-direction: column;
  gap:60px;
  
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    gap: 16px;
    padding: 16px;
  }
`;
export const PersonTile = styled.div`
   max-width: 1368px;
   padding: 40px;
   display: flex;
   gap:40px;
   font-size: 50px;
   color: black;
   flex-direction: column;
`;

export const Biography = styled.div`
   font-size: 20px;
   line-height: 1.6;
`;
export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  /* grid-row: 1 / span 2; */
`;
export const Birth = styled.p`
&::after{
    content: "Date of birthday";
}
@media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    &::after{
      content:"Birth";
    }
    }
`;
export const GreyText = styled.span`
  color: ${({ theme }) => theme.colors.tile.mutedText};
  font-size: 18px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
      font-size: 12px;
  }
`;
export const Name = styled.header`
  color: ${({ theme }) => theme.colors.tile.text};
  font-size: 36px;
  margin-bottom: 24px;
  `;
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap:16px;
  }
 `;
export const SectionTitle = styled.h2`
 font-size: 36px;
 font-weight: 600;
 margin: 64px 0 32px 0; 
 `;
