import {
 MainWrapper,
 Header,
 LongTitle,
 Rating,
 Rate,
 IconStar,
 Votes,
 RatingTopContent,
 ContainerRateText
} from "./styled";

export const MovieBanner = ({ movieDetails }) => (
 <MainWrapper>
  <Header $backdropPath={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}>
   <RatingTopContent>
    <LongTitle>{movieDetails.title}</LongTitle>
    <Rating>
     <IconStar />
     <ContainerRateText>
      {movieDetails.vote_average
       ? movieDetails.vote_average.toFixed(2).toString().replace(".", ",")
       : "No votes yet"}
      <Rate>/ 10</Rate>
     </ContainerRateText>
     <Votes>{movieDetails.vote_count}&nbsp;votes</Votes>
    </Rating>
   </RatingTopContent>
  </Header>
 </MainWrapper>
);
