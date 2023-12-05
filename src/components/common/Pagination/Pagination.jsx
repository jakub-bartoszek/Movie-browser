import {
 Button,
 StyledLeftIcon,
 StyledRightIcon,
 Text,
 Wrapper
} from "./styled";
import { useSearchParams } from "react-router-dom";

export const Pagination = ({ totalPages }) => {
 const [searchParams, setSearchParams] = useSearchParams();
 const page = parseInt(searchParams.get("page")) || 1;

 const prevPageHandler = () => {
  if (page !== 1) {
   searchParams.set("page", page - 1);
   setSearchParams(searchParams);
  }
 };

 const nextPageHandler = () => {
  if (page < totalPages) {
   searchParams.set("page", page + 1);
   setSearchParams(searchParams);
  }
 };

 const firstPageHandler = () => {
  if (page !== 1) {
   searchParams.set("page", 1);
   setSearchParams(searchParams);
  }
 };

 const lastPageHandler = () => {
  if (page !== totalPages) {
   searchParams.set("page", totalPages);
   setSearchParams(searchParams);
  }
 };

 return (
  <>
   <Wrapper>
    <Button disabled={page === 1} onClick={firstPageHandler}>
     <StyledLeftIcon />
     <StyledLeftIcon />
     <p>First</p>
    </Button>
    <Button disabled={page === 1} onClick={prevPageHandler}>
     <StyledLeftIcon />
     <p>Previous</p>
    </Button>
    <span>
     <Text>Page</Text> <strong>{page}</strong> <Text>of</Text>
     <strong>{totalPages}</strong>
    </span>
    <Button disabled={page === totalPages} onClick={nextPageHandler}>
     <p>Next</p>
     <StyledRightIcon />
    </Button>
    <Button disabled={page === totalPages} onClick={lastPageHandler}>
     <p>Last</p>
     <StyledRightIcon />
     <StyledRightIcon />
    </Button>
   </Wrapper>
  </>
 );
};
