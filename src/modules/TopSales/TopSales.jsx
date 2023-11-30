import React, { useEffect } from "react";
import "./styles/main.css";
import { Preloader } from "../../UI/Preloader/Preloader";
import { ListCard } from "../../component/ListCard/ListCard";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchCardTopSales } from "./slice/Cards";
import { useSelector } from "react-redux";

export const TopSales = () => {
  const { cards, loading, error } = useSelector((state) => state.cardsTopSales);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCardTopSales());
  }, []);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <>{cards.length > 0 && <ListCard cards={cards} />}</>
          )}
        </>
      )}
    </section>
  );
};
