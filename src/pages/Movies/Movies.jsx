import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectStatus, selectTotalPages, setCategory } from "../../utils/redux/dataSlice";
import {
 fetchMoviesSearchResults,
 fetchPopularMovies,
 selectMovies
} from "../../utils/redux/moviesSlice";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import { Container, Content, Header } from "./styled";
import { Pagination } from "../../components/common/Pagination/Pagination";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";

export default function Movies() {
 const dispatch = useDispatch();
 const [searchParams] = useSearchParams();
 const movies = useSelector(selectMovies);
 const status = useSelector(selectStatus);
 const searchQuery = searchParams.get("search") || "";
 const page = parseInt(searchParams.get("page") || "1");
 const totalPages = useSelector(selectTotalPages);

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchMoviesSearchResults({
     category: "movie",
     searchQuery,
     page
    })
   );
  } else {
   dispatch(fetchPopularMovies({ category: "movie", page }));
  }
 }, [searchQuery, page, dispatch]);

 useEffect(() => {
  dispatch(setCategory("movies"));
 }, []);

 function renderHeaderText() {
  if (!searchQuery) {
   return "Popular movies";
  } else if (status === "loading") {
   return `Search results for "${searchQuery}"`;
  } else if (status === "success" && movies?.length > 0) {
   return `Search results for "${searchQuery}" (${movies.length})`;
  } else if (status === "error") {
   return null;
  } else {
   return `Sorry, there are no results for "${searchQuery}"`;
  }
 }

 const renderContent = () => {
  switch (status) {
   case "error":
    return <Error />;
   case "loading":
    return <StyledLoader />;
   case "success":
    if (movies && movies.length > 0) {
     return (
      <>
       <Content>
        {movies.map((movie) => (
         <SmallTile
          key={movie.id}
          movie={movie}
         />
        ))}
       </Content>
       <Pagination
        totalPages={totalPages}
        page={page}
       />
      </>
     );
    } else {
     return <NoResult />;
    }
   default:
    return null;
  }
 };

 return (
  <Container>
   <Header>{renderHeaderText()}</Header>
   {renderContent()}
  </Container>
 );
}
