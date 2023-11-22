import {
  Container,
  Content,
  Header,
  Image,
  Year,
  Release,
  ReleaseDate,
  GreyRelease,
  Genres,
  Genre,
  Rating,
  IconStar,
  Rate,
  Votes,
  Discription,
  ContainerRateText,
} from "./styled";

export const Tile = ({ poster_path, title, release_date, production_countries, vote_average, votes, overview, genres }) => {
  const isMobile = window.innerWidth < 767;
  const countryNames = production_countries?.map(country => (isMobile ? country.iso_3166_1 : country.name)) || [];
  const releaseDate = new Date(release_date);
  const year = releaseDate.getFullYear().toString();

  return (
    <Container>
      <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      <Content>
        <Header>{title}</Header>
        <Year>{year}</Year>
        <Release>
          <GreyRelease>Production:</GreyRelease>
          {countryNames.toString().replace(",", ', ')}
        </Release>
        <ReleaseDate>
          <GreyRelease>Release date:</GreyRelease>
          {release_date}
        </ReleaseDate>
        <Genres>
          {genres && genres.map(genre => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        </Genres>
        <Rating>
          <IconStar />
          <ContainerRateText>
            {vote_average ? vote_average.toFixed(2).toString().replace(".", ',') : "No votes yet"}
            <Rate>/ 10</Rate>
            <Votes>{votes}&nbsp;votes</Votes>
          </ContainerRateText>
        </Rating>
      </Content>
      <Discription>
        {overview}
      </Discription>
    </Container>
  );
};
