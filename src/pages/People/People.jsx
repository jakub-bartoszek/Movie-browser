import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";
import { selectStatus, selectTotalPages, setCategory } from "../../utils/redux/dataSlice";
import {
 fetchPeopleSearchResults,
 fetchPopularPeople,
 selectPeople
} from "../../utils/redux/peopleSlice";
import { Container, Content, Header } from "./styled";
import { PersonTile } from "../../components/common/PersonTile/PersonTile";
import { Pagination } from "../../components/common/Pagination/Pagination";
import { NoResult } from "../NoResult/NoResult";
import { Error } from "../Error/Error";
import { StyledLoader } from "../../components/common/StyledLoader/styled";

export default function People() {
 const dispatch = useDispatch();
 const [searchParams] = useSearchParams();
 const people = useSelector(selectPeople);
 const status = useSelector(selectStatus);
 const searchQuery = searchParams.get("search") || "";
 const page = parseInt(searchParams.get("page") || "1");
 const totalPages = useSelector(selectTotalPages);

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchPeopleSearchResults({
     category: "person",
     searchQuery,
     page
    })
   );
  } else {
   dispatch(fetchPopularPeople({ category: "person", page }));
  }
 }, [searchQuery, page, dispatch]);

 useEffect(() => {
  dispatch(setCategory("people"));
 }, [dispatch]);

 function renderHeaderText() {
  if (!searchQuery) {
   return "Popular people";
  } else if (status === "loading") {
   return `Search results for "${searchQuery}"`;
  } else if (status === "success" && people?.length > 0) {
   return `Search results for "${searchQuery}" (${people.length})`;
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
    if (people?.length > 0) {
     return (
      <>
       <Content>
        {people.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
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
