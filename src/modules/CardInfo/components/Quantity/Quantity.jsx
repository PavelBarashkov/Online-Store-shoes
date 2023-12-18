import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { addQuantity, reduceQuantity } from "../../slice/cardSlice.js";


export const Quantity = () => {
    const dispatch = useAppDispatch();
    const { selected } = useSelector((state) => state.cardInfo);
  return (
    <p>
      Количество:{" "}
      <span className="btn-group btn-group-sm pl-2">
        <button onClick={() => dispatch(reduceQuantity())} className="btn btn-secondary">-</button>
        <span className="btn btn-outline-primary">{selected.quantity}</span>
        <button onClick={() => dispatch(addQuantity())} className="btn btn-secondary">+</button>
      </span>
    </p>
  );
};
