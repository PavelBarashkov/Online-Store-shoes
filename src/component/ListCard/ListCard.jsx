import React from "react";
import { Card } from "../../UI/Card/Card";

export const ListCard = ({ cards, type }) => {
  return (
    <div className="row">
      {cards &&
        cards.map((card) => (
          <div key={card.id} className="col-4">
            <Card card={card} type={type} />
          </div>
        ))}
    </div>
  );
};
