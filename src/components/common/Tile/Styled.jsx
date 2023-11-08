import styled from "styled-components";

export const Container = styled.div`
   background-color:${({ theme }) => theme.colors.tile.background};
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
   color:${({ theme }) => theme.colors.tile.text};
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
   color:${({ theme }) => theme.colors.tile.mutedText}; 
   margin-right: 5px;
   display: block;
`;

export const Genres = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   list-style: none;
   padding-left: 0px;
   margin-top: 24px;
`;

export const Genre = styled.li`
  font-size: 14px; 
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.tile.ganresBackground};
  padding: 8px 16px;
  margin:0 16px 8px 0;
`;

export const Rating = styled.div`
  margin-top: 24px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
`;

export const Icon = styled.img`
   width:24px;
   height: 24px;
   margin-right: 8px;
`;

export const Rate = styled.span`
   font-size: 14px;
   font-weight: 400;
   margin-right: 12px;
   margin-left: 8px;
`;

export const Votes = styled.span`
   font-size: 14px;
   font-weight: 400;
`;

export const Discription = styled.div`
   max-width: 936px;;
   font-size: 20px;
   line-height: 160%;
   margin-top: 24px;
   font-weight: 400;
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		font-size: 16px;
      line-height: 130%;
	}
`;
