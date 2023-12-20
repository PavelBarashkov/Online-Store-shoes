import React from "react";
import { NavLink } from "react-router-dom";
import { PRODUCT_INFO_ROUTE } from "../../pages/helpers/contst/const";
import './card.css'

export const Card = ({ card, type }) => {
  const splitString = card.title.split(" ");
  const readyTitle = splitString.slice(0, 2).join(" ");

  if (type === 'catalog') {
    return (
        <div className="card catalog-item-card customImg">
          <div style={{backgroundImage: card.images[0]}}></div>
            <div className="img-container">
            <img
            src={card.images && card.images[0]}
            className="card-img-top img-fluid"
            alt={card.title}
          />
            </div>
          <div className="card-body">
            <p className="card-text">{readyTitle}</p>
            <p className="card-text">{card.price} руб.</p>
            <NavLink
              to={`${PRODUCT_INFO_ROUTE}/${card.id}.html`}
              className="btn btn-outline-primary"
            >
              Заказать
            </NavLink>
          </div>
        </div>
      );
  } 
    return (
        <div className="card">
            <div className="img-container">
            <img
            src={card.images && card.images[0]}
            className="card-img-top img-fluid customImg"
            alt={card.title}
          />
            </div>
        
          <div className="card-body">
            <p className="card-text">{readyTitle}</p>
            <p className="card-text">{card.price} руб.</p>
            <NavLink
              to={`${PRODUCT_INFO_ROUTE}/${card.id}.html`}
              className="btn btn-outline-primary"
            >
              Заказать
            </NavLink>
          </div>
        </div>
      );
  
};
