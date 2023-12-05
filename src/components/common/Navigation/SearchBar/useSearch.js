import { useSearchParams } from "react-router-dom";
import { setSearchQuery } from "../../../../utils/redux/dataSlice";
import { useDispatch } from "react-redux";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
    if (event.target.value !== "") {
      searchParams.set("search", event.target.value);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  };

  return {
    onInputChange,
    searchQuery
  };
};