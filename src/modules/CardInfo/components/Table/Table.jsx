import React from "react";

export const Table = ({card}) => {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{card.sku ? card.sku : ''}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{card.manufacturer ? card.manufacturer : ''}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{card.color ? card.color : ''}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{card.material ? card.material : ''}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{card.season ? card.season : ''}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{card.reason ? card.reason : ''}</td>
        </tr>
      </tbody>
    </table>
  );
};
