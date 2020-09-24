import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

export function ItemsProvider(props) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemsContext.Provider>
  );
}
