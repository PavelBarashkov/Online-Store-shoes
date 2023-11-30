import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { useSelector } from "react-redux";
import "./main.css";
import { resetCards, setSelected } from "../../../Catalog/slice/catalog.js";

export const ListCategories = ({ listCategories }) => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector((state) => state.catalog);

  const handleBtn = () => {
    dispatch(setSelected(undefined));
    dispatch(resetCards());
  };
  const active = () => {
    return categories.selected === undefined ? "active" : "";
  };
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <span onClick={handleBtn} className={`nav-link ${active()}`}>
          Все
        </span>
      </li>
      {listCategories &&
        listCategories.map((category) => <CategoryItem key={category.id} category={category} />)}
    </ul>
  );
};
