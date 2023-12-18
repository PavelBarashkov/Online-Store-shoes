import React, { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { setSize } from "../../slice/cardSlice.js";
import "./main.css";

export const Sizes = ({ sizes }) => {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
    dispatch(setSize(size));
  };
  return (
    <p>
      Размеры в наличии:{" "}
      {sizes &&
        sizes.map((item) => (
          <>
            {item.available && (
              <span
                key={item.size}
                className={`catalog-item-size ${
                  selectedSize === item.size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(item.size)}
              >
                {item.size}
              </span>
            )}
          </>
        ))}
    </p>
  );
};
