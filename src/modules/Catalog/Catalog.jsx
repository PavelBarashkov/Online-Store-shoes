import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchCard, updateIsAdd } from "./slice/catalog.js";
import { ListCard } from "../../component/ListCard/ListCard.jsx";
import { Preloader } from "../../UI/Preloader/Preloader.jsx";

export const Catalog = () => {
  const { cards, loading, error, subLoading, subError, offset, isShowBtn } =
    useSelector((state) => state.catalogCards);
  const { selected } = useSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  const params = {
    categoryId: selected,
    offset: offset,
  };
  useEffect(() => {
    dispatch(fetchCard(params));
  }, [selected, params.offset]);

  const handleBtn = () => {
    params.offset = 6;
    dispatch(updateIsAdd());
    dispatch(fetchCard(params));
  };
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              <ListCard cards={cards} type={"catalog"} />
              {subLoading && <Preloader />}
              {isShowBtn && (
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
