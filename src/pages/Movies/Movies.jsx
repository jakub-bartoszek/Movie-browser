import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallTile } from "../../components/common/SmallTile/SmallTile";
import {
 fetchPopularMovies,
 selectMovies,
 selectStatus,
 selectTotalPages,
 selectCategory,
 selectSearchTotalPages,
 setCategory,
 fetchMoviesSearchResults
} from "../../utils/redux/dataSlice";

import { Container, Content, Header } from "./styled";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { Pagination } from "../../components/common/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Movies() {
 const dispatch = useDispatch();
 const movies = useSelector(selectMovies);
 const status = useSelector(selectStatus);
 const category = useSelector(selectCategory);
 const totalPages = useSelector(selectTotalPages);
 const searchPage = useSelector(selectSearchTotalPages);
 const searchTotalPages = useSelector(selectSearchTotalPages);
 const [searchParams, setSearchParams] = useSearchParams();
 const searchQuery = searchParams.get("search") || "";
 const page = searchParams.get("page") || "1";

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchMoviesSearchResults({
     category: "movie",
     searchQuery: searchQuery,
     page: page
    })
   );
  } else {
   dispatch(fetchPopularMovies({ category: "movie", page: page }));
  }
 }, [searchQuery, page, searchPage, dispatch]);

 useEffect(() => {
  dispatch(setCategory("movies"));
 }, [dispatch, category]);

 const renderContent = () => {
  switch (status) {
   case "error":
    return <Error />;
   case "loading":
    return <StyledLoader />;
   case "success":
    return (
     <>
      {movies.length > 0 ? (
       <>
        <Content>
         {movies?.map((movie) => (
          <SmallTile
           key={nanoid()}
           movie={movie}
          />
         ))}
        </Content>
        <Pagination
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
    );
   default:
    return null;
  }
 };

 function renderHeaderText() {
  if (!searchQuery) {
   return "Popular movies";
  } else if (status === "loading") {
   return `Search results for "${searchQuery}"`;
  } else if (status === "success" && movies.length > 0) {
   return `Search results for "${searchQuery}" (${movies.length})`;
  } else {
   return `Sorry, there are no results for "${searchQuery}"`;
  }
 }

 return (
  <Container>
   <Header>{renderHeaderText()}</Header>
   {renderContent()}
  </Container>
 );
}
