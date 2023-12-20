import React, { useState } from "react";
import { useFetching } from "../../../../hooks/useFetching";
import { sendOrder } from "../../../API/sendOrder";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { resetBasket } from "../../../../slices/basketSlice";
import { Preloader } from "../../../../UI/Preloader/Preloader.jsx";

export const Form = () => {
  const dispatch = useAppDispatch();
  const [isSend, setIsSend] = useState(false);
  const [form, setForm] = useState({
    owner: {
      phone: "",
      address: "",
    },
    checkbox: false,
  });

  const handlerInput = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      owner: {
        ...prevForm.owner,
        [id]: value,
      },
    }));
  };

  const handlerCheckbox = () => {
    setForm((prevForm) => ({
      ...prevForm,
      checkbox: !prevForm.checkbox,
    }));
  };
  const [order, isOrderLoading, orderError] = useFetching(async (body) => {
    const response = await sendOrder(body);
    if (response.status === 204) {
      setIsSend(true);
    }
  });

  const handlerBtn = (e) => {
    e.preventDefault();
    const updatedProducts = JSON.parse(localStorage.getItem("basket")) || [];
    const items = updatedProducts.map((item) => ({
      id: item.cardId,
      price: item.price,
      count: item.quantity,
    }));
    const data = {
      owner: form.owner,
      items,
    };
    order(data);
    dispatch(resetBasket());
  };

  return (
    <form className="card-body">
      <div className="form-group">
        <label for="phone">Телефон</label>
        <input
          className="form-control"
          id="phone"
          placeholder="Ваш телефон"
          value={form?.owner?.phone}
          onChange={(e) => handlerInput(e)}
        />
      </div>
      <div className="form-group">
        <label for="address">Адрес доставки</label>
        <input
          className="form-control"
          id="address"
          placeholder="Адрес доставки"
          value={form.owner.address}
          onChange={(e) => handlerInput(e)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          checked={form.checkbox}
          className="form-check-input"
          id="agreement"
          onChange={() => handlerCheckbox()}
        />
        <label className="form-check-label" for="agreement">
          Согласен с правилами доставки
        </label>
      </div>
      <button
        disabled={!form.checkbox}
        onClick={handlerBtn}
        type="submit"
        className="btn btn-outline-secondary"
      >
        Оформить
      </button>
      {isOrderLoading ? (
        <Preloader />
      ) : (
        <>
          {orderError ? (
            <div>Ошибка! Повторите попытку</div>
          ) : (
            <>{isSend && <div>Заявка отправлена</div>}</>
          )}
        </>
      )}
    </form>
  );
};
