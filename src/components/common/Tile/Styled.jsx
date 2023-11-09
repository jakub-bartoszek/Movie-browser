import styled from "styled-components";
import { ReactComponent as star } from "../../../assets/star.svg"

export const Container = styled.div`
   background-color:${({ theme }) => theme.colors.tile.background};
   max-width: 1368px;
   padding: 40px;
   box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
   display: grid;
   grid-template-columns: 1fr 3fr auto;
   column-gap: 40px;     
   grid-template-areas:  
    "image content content"
    "image content content"
    "image discription discription "
    "image discription discription"
   ;
       @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
          padding: 16px;
          gap: 16px;
          grid-template-areas: 
            "image content content"
            "image content content"
            "image content content "
            "discription discription discription"
      ;
   }
`;

export const Image = styled.img`
   max-width: 312px;
   max-height: 464px;
   border-radius: 5px;
   grid-area: image;
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		width: 164px;
      height: 219px;
   }
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 114px;
      height: 169px;
	}
`;

export const Content = styled.div`
   grid-area: content;
   row-gap: 24px;
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
      row-gap: 8px;
   }
`;

export const Header = styled.header`
   color:${({ theme }) => theme.colors.tile.text};
   font-size: 36px;
   margin-bottom: 24px;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
         width: 120px;
         font-size: 16px;
         margin-bottom: 4px;
         font-weight: 500;;
	}
`;

export const Year = styled.p`
   font-size: 22px;
   margin-bottom: 24px;
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
         width: 120px;
         font-size: 13px;
         margin-bottom: 8px;
         color:${({ theme }) => theme.colors.tile.mutedText};
   }
`;

export const Release = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
      font-size: 12px;
   } 
`;

export const ReleaseDate = styled.div`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
         font-size: 12px;
   } 
`;

export const GreyRelease = styled.span`
   color:${({ theme }) => theme.colors.tile.mutedText}; 
   margin-right: 5px;
   display: block;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}){
         display: none;
   }
`;

export const Genres = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   list-style: none;
   padding-left: 0px;
   margin-top: 24px;
         @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}){
            margin-top: 8px;
   }
`;

export const Genre = styled.li`
  font-size: 14px; 
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.tile.genresBackground};
  padding: 8px 16px;
  margin:0 16px 8px 0;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}){
         font-size: 10px;
         padding: 4px 8px;
         margin:0 8px 4px 0;
   }
`;

export const Rating = styled.div`
  margin-top: 24px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}){
         font-size: 13px;
         margin-top: 8px;
   }
`;

export const IconStar = styled(star)`
   margin-right: 8px;
       @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		   height: 16px;
		   width: 16px;
	}
`;

export const Rate = styled.span`
   font-size: 14px;
   font-weight: 400;
   margin-right: 12px;
   margin-left: 8px;
         @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
            display: none;
   }
`;

export const Votes = styled.span`
   font-size: 14px;
   font-weight: 400;
   @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}){
         font-size: 13px;
         color:${({ theme }) => theme.colors.tile.mutedText}; 
         margin-left: 7px;
   }
`;

export const Discription = styled.div`
   max-width: 936px;
   font-size: 20px;
   line-height: 160%;
   /* margin-top: 24px; */
   font-weight: 400;
   grid-area: discription;
   
       @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
		   font-size: 14px;
         column-gap: 8px;
         margin-top: 8px;
      }
`;
