import React, { useState, createContext } from "react";

export const ItemsContext = createContext();
export const IncomeContext = createContext();
export const ExpenseContext = createContext();

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

export function IncomeProvider(props) {
  const [incomeItems, setIncomeItems] = useState([]);
  return (
    <IncomeContext.Provider value={[incomeItems, setIncomeItems]}>
      {props.children}
    </IncomeContext.Provider>
  );
}

export function ExpenseProvider(props) {
  const [expenseItems, setExpenseItems] = useState([]);
  return (
    <ExpenseContext.Provider value={[expenseItems, setExpenseItems]}>
      {props.children}
    </ExpenseContext.Provider>
  );
}
