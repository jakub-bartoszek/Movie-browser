import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import {
 fetchPopularMovies,
 fetchSearchResults,
 selectMovies,
 selectStatus,
 setPage,
 selectPage,
 selectTotalPages
} from "../../utils/redux/moviesSlice";
import {
 selectCategory,
 selectSearchPage,
 selectSearchQuery,
 selectSearchTotalPages,
 setCategory,
 setSearchQuery
} from "../../utils/redux/searchSlice";

import { Container, Content, Header, StyledLink } from "./styled";
import { toMoviePage } from "../../routes";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { PaginationMovies } from "../../components/common/Navigation/Pagination/PaginationMovies";
import { useSearchParams } from "react-router-dom";

export default function Movies() {
 const dispatch = useDispatch();
 const movies = useSelector(selectMovies);
 const searchQuery = useSelector(selectSearchQuery);
 const status = useSelector(selectStatus);
 const category = useSelector(selectCategory);
 const page = useSelector(selectPage);
 const totalPages = useSelector(selectTotalPages);
 const searchPage = useSelector(selectSearchPage);
 const searchTotalPages = useSelector(selectSearchTotalPages);
 const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
  if (searchParams.get("search")) {
   dispatch(
    fetchSearchResults({
     category: "movie",
     searchQuery: searchParams.get("search"),
     page: searchPage
    })
   );
  } else {
   dispatch(fetchPopularMovies({ category: "movie", page: page }));
  }
 }, [searchParams, searchQuery, page, searchPage, dispatch]);

 useEffect(() => {
  dispatch(setCategory("movies"));
  dispatch(setPage(1));
 }, [dispatch, category]);

 return (
  <Container>
   {status !== "error" && (
    <Header>
     {!searchQuery
      ? `Popular movies`
      : status === "loading"
      ? `Search results for "${searchQuery}"`
      : status === "success" && movies.length > 0
      ? `Search results for "${searchQuery}" (${movies.length})`
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
           <StyledLink
            to={toMoviePage({ id: movie.id })}
            key={movie.id}
           >
            <SmallTile movie={movie} />
           </StyledLink>
          ))}
         </Content>
         <PaginationMovies
          page={page}
          totalPages={totalPages}
          searchTotalPages={searchTotalPages}
          searchPage={searchPage}
          searchQuery={searchQuery}
         />
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
