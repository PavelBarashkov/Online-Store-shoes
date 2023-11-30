import { ListCategories } from "../ListCategories/ListCategories";
import { useSelector } from "react-redux";

export const Categories = () => {
  const { categories } = useSelector((state) => state.catalog);

  return <ListCategories listCategories={categories.categories} />;
};
