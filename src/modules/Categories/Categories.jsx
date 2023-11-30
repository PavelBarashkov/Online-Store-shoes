import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchCategories } from "./slice/categories";
import { useSelector } from "react-redux";
import { ListCategories } from "./components/ListCategories/ListCategories.js";


export const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Загрузка категорий
        </div>
      ) : (
        <>
          {error ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {error}
            </div>
          ) : (
            <ListCategories categories={categories} />
          )}
        </>
      )}
    </>
  );
};
