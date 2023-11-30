import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { setSelected } from "../../slice/categories";
import { useSelector } from "react-redux";
import "./main.css";
import { resetCards } from "../../../Catalog/slice/catalog.js";

export const ListCategories = ({ categories }) => {
  const dispatch = useAppDispatch();
  const { selected } = useSelector((state) => state.categories);

  const handleBtn = () => {
    dispatch(setSelected(undefined));
    dispatch(resetCards());
  };
  const active = () => {
    return selected === undefined ? "active" : "";
  };
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <span onClick={handleBtn} className={`nav-link ${active()}`}>
          Все
        </span>
      </li>
      {categories &&
        categories.map((category) => <CategoryItem category={category} />)}
    </ul>
  );
};
