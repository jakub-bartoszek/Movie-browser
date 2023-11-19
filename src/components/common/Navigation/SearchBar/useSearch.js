import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { selectCategory, setSearchQuery } from "../../../../utils/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState(searchParams.get("search"));
  const category = useSelector(selectCategory);

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

  useEffect(() => {
    setValue("");
  }, [category]);

  return {
    onInputChange,
    value
  };
};