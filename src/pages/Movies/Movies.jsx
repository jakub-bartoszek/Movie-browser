import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import {
 fetchPopularMovies,
 fetchSearchResults,
 selectMovies,
 selectStatus
} from "../../utils/redux/moviesSlice";
import {
 selectCategory,
 selectSearchQuery,
 setCategory,
 setSearchQuery
} from "../../utils/redux/searchSlice";

import {
 Button,
 Container,
 Content,
 Header,
 Pagination,
 StyledLeftIcon,
 StyledNav,
 StyledRightIcon
} from "./styled";
import { toMoviePage } from "../../routes";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";

export default function Movies() {
 const dispatch = useDispatch();
 const movies = useSelector(selectMovies);
 const searchQuery = useSelector(selectSearchQuery);
 const status = useSelector(selectStatus);
 const category = useSelector(selectCategory);

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchSearchResults({ category: "movie", searchQuery: searchQuery })
   );
  } else {
   dispatch(fetchPopularMovies({ category: "movie" }));
  }
 }, [searchQuery, dispatch]);

 useEffect(() => {
  dispatch(setCategory("movies"));
  dispatch(setSearchQuery(""));
 }, [dispatch, category]);

 return (
  <Container>
   {status !== "error" && (
    <Header>
     {!searchQuery
      ? `Popular movies`
      : (searchQuery && movies.length) > 0
      ? `Search results for "${searchQuery}" ${
         status === "success" ? `(${movies.length})` : ""
        }`
      : `Sorry, there are no results for "${searchQuery}"`}
    </Header>
   )}
   {
    {
     loading: <StyledLoader />,
     error: <Error />,
     success: (
      <>
       {movies.length > 0 ? (
        <>
         <Content>
          {movies?.map((movie) => (
           <StyledNav
            to={toMoviePage({ id: movie.id })}
            key={movie.id}
           >
            <SmallTile movie={movie} />
           </StyledNav>
          ))}
         </Content>
         <Pagination>
          <Button>
           <StyledLeftIcon />
           <StyledLeftIcon />
          </Button>
          <Button>
           <StyledLeftIcon />
          </Button>
          <span>
           Page <strong>1</strong> of <strong>500</strong>
          </span>
          <Button>
           <StyledRightIcon />
          </Button>
          <Button>
           <StyledRightIcon />
           <StyledRightIcon />
          </Button>
         </Pagination>
        </>
       ) : (
        <NoResult />
       )}
      </>
     )
    }[status]
   }
  </Container>
 );
}
