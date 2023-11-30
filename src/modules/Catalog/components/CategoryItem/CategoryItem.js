import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks.ts";
import "./style.css";
import { resetCards, setSelected } from "../../../Catalog/slice/catalog.js";

export const CategoryItem = ({ category }) => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector((state) => state.catalog);

  const active = () => {
    return category.id === categories.selected ? "active" : "";
  };

  const handleBtn = () => {
    dispatch(setSelected(category.id));
    if (category.id !== categories.selected) {
      dispatch(resetCards());
    }
  };
  return (
    <>
      {category && (
        <li className="nav-item">
          <span onClick={handleBtn} className={`nav-link ${active()}`}>
            {category.title && category.title}
          </span>
        </li>
      )}
    </>
  );
};
