import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchCard, fetchCategories, resetCards, updateIsAdd } from "./slice/catalog.js";
import { ListCard } from "../../component/ListCard/ListCard.jsx";
import { Preloader } from "../../UI/Preloader/Preloader.jsx";
import { useLocation } from "react-router-dom";
import { CATALOG_ROUTE } from "../../pages/helpers/contst/const.js";
import { Search } from "./components/Search/Search.js";
import { Categories } from "./components/Categories/Categories.jsx";

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isCatalog = location.pathname === CATALOG_ROUTE;
  const { cards, categories, addCards } = useSelector((state) => state.catalog);

  const params = {
    categoryId: categories.selected,
    offset: addCards.offset,
  };
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(resetCards());
  }, []);

  useEffect(() => {
    dispatch(fetchCard(params));
  }, [params.categoryId, params.offset]);

  const handleBtn = () => {
    params.offset = 6;
    dispatch(updateIsAdd());
    dispatch(fetchCard(params));
  };

  return (
    <>
      {isCatalog && <Search />}
      {cards.loading || categories.loading ? (
        <Preloader />
      ) : (
        <>
          {cards.error ? (
            <div>{cards.error}</div>
          ) : (
            <>
              <Categories />
              <ListCard cards={cards.cards} />
              {addCards.loading && <Preloader />}
              {addCards.isShowBtn && (
                <div className="text-center">
                  <button
                    onClick={handleBtn}
                    className="btn btn-outline-primary"
                  >
                    Загрузить ещё
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
