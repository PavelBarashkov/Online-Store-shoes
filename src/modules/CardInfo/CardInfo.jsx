import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks.ts";
import { fetchCardInfo, resetCard } from "./slice/cardSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Title } from "./components/Title/Title.jsx";
import { ImageCard } from "./components/ImageCard/ImageCard.jsx";
import { Table } from "./components/Table/Table.jsx";
import { Sizes } from "./components/Sizes/Sizes.jsx";
import { Quantity } from "./components/Quantity/Quantity.jsx";
import { Preloader } from "../../UI/Preloader/Preloader.jsx";
import { addInBasket } from "../../slices/basketSlice.js";

export const CardInfo = () => {
  const dispatch = useAppDispatch();
  const { card, selected, loading, error } = useSelector(
    (state) => state.cardInfo
  );
  const { id } = useParams();
  const getId = (str) => Number(str.split(".").slice(0, 1));
  useEffect(() => {
    if (id) dispatch(fetchCardInfo(getId(id)));
  }, []);

  useEffect(() => {
    dispatch(resetCard());
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <section className="catalog-item">
              <Title title={card.title} />
              <div className="row">
                <div className="col-5">
                  <ImageCard
                    img={card.images && card.images[0]}
                    alt={card.title}
                  />
                </div>
                <div className="col-7">
                  <Table card={card} />
                  {card?.sizes?.some((item) => item.available === true) ? (
                    <>
                      <div className="text-center">
                        <Sizes sizes={card.sizes} />
                        <Quantity />
                      </div>
                      <button
                        disabled={selected.size === null}
                        onClick={() =>
                          dispatch(
                            addInBasket({
                              cardId: card.id,
                              name: card.title,
                              size: selected.size,
                              quantity: selected.quantity,
                              price: card.price,
                            })
                          )
                        }
                        className="btn btn-danger btn-block btn-lg"
                      >
                        В корзину
                      </button>
                    </>
                  ) : (
                    <div>Нет доступных размеров</div>
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
