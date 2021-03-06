import React, { useContext } from "react";
import HistoryItem from "./historyItem";

//context
import { ItemsContext } from "../context";

const HistoryBox = ({
  name,
  color,
  sign,
  items,
  currency,
  display,
  changeDisplay,
  text,
}) => {
  const [itemsToSelect, setItemsToSelect] = useContext(ItemsContext);

  const selectItem = (id) => {
    setItemsToSelect(
      itemsToSelect.map((itemToSelect) =>
        itemToSelect.id === id
          ? {
              ...itemToSelect,
              selected: !itemToSelect.selected,
            }
          : itemToSelect
      )
    );
  };

  return (
    <div
      className="history-box"
      style={{ display: display === false ? "none" : "block" }}
    >
      <div className="inner-history-box" style={{ color: color }}>
        <h2 className="box-title">{name}</h2>
        <div className="box-show">
          <p onClick={changeDisplay}>show {text}</p>
        </div>
        <div className="box-flex">
          {items.map((item) => (
            <HistoryItem
              key={item.id}
              color={color}
              sign={sign}
              item={item}
              handleSelect={() => selectItem(item.id)}
              selected={item.selected}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryBox;
