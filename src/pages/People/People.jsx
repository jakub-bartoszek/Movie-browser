import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Header } from "./styled";

import { nanoid } from "nanoid";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  fetchPeopleSearchResults,
 fetchPopularPeople,
 fetchSearchResults,
 selectCategory,
 selectPeople,
 selectStatus,
 selectTotalPages,
 setCategory
} from "../../utils/redux/dataSlice";
import { Pagination } from "../../components/common/Pagination/Pagination";

export default function People() {
 const dispatch = useDispatch();
 const people = useSelector(selectPeople);
 const status = useSelector(selectStatus);
 const category = useSelector(selectCategory);
 const totalPages = useSelector(selectTotalPages);
 const [searchParams, setSearchParams] = useSearchParams();
 const searchQuery = searchParams.get("search") || "";
 const page = searchParams.get("page") || "1";

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchPeopleSearchResults({
     category: "person",
     searchQuery: searchQuery,
     page: page
    })
   );
  } else {
   dispatch(fetchPopularPeople({ category: "person", page: page }));
  }
 }, [searchQuery, page, dispatch]);

 useEffect(() => {
  dispatch(setCategory("people"));
 }, [dispatch, category]);

 return (
  <Container>
   {status !== "error" && (
    <Header>
     {!searchQuery
      ? `Popular people`
      : status === "loading"
      ? `Search results for "${searchQuery}"`
      : status === "success" && people.length > 0
      ? `Search results for "${searchQuery}" (${people.length})`
      : `Sorry, there are no results for "${searchQuery}"`}
    </Header>
   )}
   {
    {
     loading: <StyledLoader />,
     error: <Error />,
     success: (
      <>
       {people.length > 0 ? (
        <>
         <Content>
          {people?.map((member) => (
           <PersonTile
            key={nanoid()}
            member={member}
           />
          ))}
         </Content>
         <Pagination totalPages={totalPages} />
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
