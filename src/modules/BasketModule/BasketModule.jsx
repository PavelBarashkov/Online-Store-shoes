import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks.ts";
import { deleteItem } from "../../slices/basketSlice";
import { useSelector } from "react-redux";
import { Table } from "./Components/Table/Table.jsx";
import { Form } from "./Components/Form/Form.jsx";

export const BasketModule = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <Table />
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
          <Form />
        </div>
      </section>
    </>
  );
};
