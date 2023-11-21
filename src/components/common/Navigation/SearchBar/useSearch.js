import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setSearchQuery } from "../../../../utils/redux/searchSlice";
import { useDispatch } from "react-redux";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
    if (event.target.value !== "") {
      setSearchParams({ search: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    dispatch(setSearchQuery(searchParams.get("search") || ""));
  });

  return {
    onInputChange,
  };
};