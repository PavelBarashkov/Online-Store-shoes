import React from "react";
import { setSelected } from "../../slice/categories";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks.ts";
import "./style.css";
import { resetCards } from "../../../CatalogModule/slice/catalog.js";

export const CategoryItem = ({ category }) => {
  const dispatch = useAppDispatch();
  const { selected } = useSelector((state) => state.categories);
  const active = () => {
    return category.id === selected ? "active" : "";
  };

  const handleBtn = () => {
    dispatch(setSelected(category.id));
    if (category.id !== selected) {
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
