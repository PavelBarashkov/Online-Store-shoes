import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks.ts";
import { deleteItem } from "../../slices/basketSlice";
import { useSelector } from "react-redux";

export const BasketModule = () => {
  const dispatch = useAppDispatch();
  const { basket } = useSelector((state) => state.basket);
  let options = { style: "currency", currency: "RUB" };
  let numberFormat = new Intl.NumberFormat("ru-RU", options);
  let allPrice = 0;

  let products = JSON.parse(localStorage.getItem("basket"));
  products.forEach((element) => {
    const priceEl = element.price * element.quantity;
    allPrice += priceEl;
  });
  useEffect(() => {
    products = JSON.parse(localStorage.getItem("basket"));
  }, [basket]);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>
                  <a href="/products/1.html">{product.name}</a>
                </td>
                <td>{product.size}</td>
                <td>{product.quantity}</td>
                <td>{numberFormat.format(product.price)}</td>
                <td>{numberFormat.format(product.price * product.quantity)}</td>
                <td>
                  <button
                    onClick={() => dispatch(deleteItem(product))}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colspan="5" className="text-right">
                Общая стоимость
              </td>
              <td>{allPrice}руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
          <form className="card-body">
            <div className="form-group">
              <label for="phone">Телефон</label>
              <input
                className="form-control"
                id="phone"
                placeholder="Ваш телефон"
              />
            </div>
            <div className="form-group">
              <label for="address">Адрес доставки</label>
              <input
                className="form-control"
                id="address"
                placeholder="Адрес доставки"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
              />
              <label className="form-check-label" for="agreement">
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
