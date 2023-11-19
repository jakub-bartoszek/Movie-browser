import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { setSearchQuery } from "../../../../utils/redux/moviesSlice";
import { useDispatch } from "react-redux";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState(searchParams.get("search"));

  const onInputChange = (event) => {
    setValue(event.target.value);
    if (event.target.value !== "") {
      setSearchParams({ search: event.target.value });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    dispatch(setSearchQuery(searchParams.get("search")));
  });

  return {
    onInputChange,
    value
  };
};