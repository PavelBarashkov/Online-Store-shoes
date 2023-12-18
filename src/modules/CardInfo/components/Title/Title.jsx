import React from "react";

export const Title = ({ title }) => {
  if (!title) {
    return <h2 className="text-center">Обувь</h2>;
  }
  return <h2 className="text-center">{title}</h2>;
};

