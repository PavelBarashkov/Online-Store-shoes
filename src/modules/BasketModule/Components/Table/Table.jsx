import React, {useEffect} from 'react'
import { useAppDispatch } from "../../../../app/hooks.ts";
import { useSelector } from "react-redux";
import { deleteItem } from '../../../../slices/basketSlice.js';
import { NavLink } from 'react-router-dom';

export const Table = () => {
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
      {products &&products?.map((product, index) => (
        <tr>
          <td scope="row">{index + 1}</td>
          <td>
            <NavLink to={`/product/${product.cardId}.html`}>{product.name}</NavLink>
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
        <td>{numberFormat.format(allPrice)}</td>
      </tr>
    </tbody>
  </table>
  )
}
