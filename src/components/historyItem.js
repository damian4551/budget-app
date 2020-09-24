import React from "react";

const HistoryItem = ({
  color,
  sign,
  item,
  handleSelect,
  selected,
  currency,
}) => {
  return (
    <div className="box-item" onClick={handleSelect}>
      <div
        className={selected ? "circle active" : "circle"}
        style={{ backgroundColor: color }}
      />
      <div className="item-info">
        <p className="item-title">{item.title}</p>
        <p className="item-amount">
          {sign}
          {item.amount}
          {currency}
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;
