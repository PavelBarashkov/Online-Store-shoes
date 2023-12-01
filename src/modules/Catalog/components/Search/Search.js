import React, { useEffect } from "react";
import "./style/main.css";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { useSelector } from "react-redux";
import {
  cleanCards,
  fetchCard,
  isSearch,
  setSearch,
} from "../../slice/catalog.js";

export const Search = () => {
  const dispatch = useAppDispatch();
  const {  categories, search } = useSelector((state) => state.catalog);
  const {   search: searchHeader} = useSelector((state) => (state.header));
  const params = {
    categoryId: categories.selected,
    offset: undefined,
    search: search.text,
  };

  useEffect(() => {
    if(searchHeader !== undefined) {
        dispatch(setSearch(searchHeader))
        console.log(searchHeader)
    }
  }, [])

  return (
    <form className="catalog-search-form form-inline">
      <input
        className="form-control"
        placeholder="Поиск"
        value={search.text === undefined ? "" : search.text}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();

            dispatch(cleanCards());
            dispatch(isSearch());
            dispatch(fetchCard(params));
          }
        }}
      />
    </form>
  );
};
