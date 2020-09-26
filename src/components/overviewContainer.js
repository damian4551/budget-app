import React, { useState, useContext, useEffect, useCallback } from "react";

import { motion } from "framer-motion";

//context
import { ItemsContext } from "../context";

//components
import CategoryItem from "./categoryItem";

const OverviewContainer = () => {
  const [items] = useContext(ItemsContext);
  const [sumOfExpenses, setSumOfExpenses] = useState(0);
  const [expensesOnFood, setExpensesOnFood] = useState(0);
  const [expensesOnEntertainment, setExpensesOnEntertainment] = useState(0);
  const [expensesOnBills, setExpensesOnBills] = useState(0);
  const [expensesOnTravel, setExpensesOnTravel] = useState(0);
  const [expensesOnFashion, setExpensesOnFashion] = useState(0);
  const [expensesOnOther, setExpensesOnOther] = useState(0);

  const sumAllExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        setSumOfExpenses((sumOfExpenses) => sumOfExpenses + -1 * item.amount)
    );
  }, [items]);

  const sumOfFoodExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "food" &&
        setExpensesOnFood((expensesOnFood) => expensesOnFood + item.amount)
    );
  }, [items]);

  const sumOfEntertainmentExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "entertainment" &&
        setExpensesOnEntertainment(
          (expensesOnEntertainment) => expensesOnEntertainment + item.amount
        )
    );
  }, [items]);

  const sumOfBillsExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "bills" &&
        setExpensesOnBills((expensesOnBills) => expensesOnBills + item.amount)
    );
  }, [items]);

  const sumOfTravelExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "travel" &&
        setExpensesOnTravel(
          (expensesOnTravel) => expensesOnTravel + item.amount
        )
    );
  }, [items]);

  const sumOfFashionExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "fashion" &&
        setExpensesOnFashion(
          (expensesOnFashion) => expensesOnFashion + item.amount
        )
    );
  }, [items]);

  const sumOfOtherExpenses = useCallback(() => {
    items.forEach(
      (item) =>
        item.incomeExpense === "expense" &&
        item.category === "other" &&
        setExpensesOnOther((expensesOnOther) => expensesOnOther + item.amount)
    );
  }, [items]);

  useEffect(() => {
    sumAllExpenses();
    sumOfFoodExpenses();
    sumOfEntertainmentExpenses();
    sumOfBillsExpenses();
    sumOfTravelExpenses();
    sumOfFashionExpenses();
    sumOfOtherExpenses();
  }, [
    sumAllExpenses,
    sumOfFoodExpenses,
    sumOfEntertainmentExpenses,
    sumOfBillsExpenses,
    sumOfTravelExpenses,
    sumOfFashionExpenses,
    sumOfOtherExpenses,
  ]);

  const categories = [
    {
      category: "food",
      expenses:
        parseFloat(expensesOnFood) < 0
          ? -1 * parseFloat(expensesOnFood)
          : parseFloat(expensesOnFood),
    },
    {
      category: "entartainment",
      expenses:
        parseFloat(expensesOnEntertainment) < 0
          ? -1 * parseFloat(expensesOnEntertainment)
          : parseFloat(expensesOnEntertainment),
    },
    {
      category: "bills",
      expenses:
        parseFloat(expensesOnBills) < 0
          ? -1 * parseFloat(expensesOnBills)
          : parseFloat(expensesOnBills),
    },
    {
      category: "travel",
      expenses:
        parseFloat(expensesOnTravel) < 0
          ? -1 * parseFloat(expensesOnTravel)
          : parseFloat(expensesOnTravel),
    },
    {
      category: "fashion",
      expenses:
        parseFloat(expensesOnFashion) < 0
          ? -1 * parseFloat(expensesOnFashion)
          : parseFloat(expensesOnFashion),
    },
    {
      category: "other",
      expenses:
        parseFloat(expensesOnOther) < 0
          ? -1 * parseFloat(expensesOnOther)
          : parseFloat(expensesOnOther),
    },
  ];

  return (
    <div className="main" style={{ minHeight: "100vh" }}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 1 }}
        className="overview-inner"
      >
        <div className="text-box">
          <p> &gt; overview</p>
        </div>
        {categories.map((category) => (
          <CategoryItem
            key={category.category}
            category={category.category}
            expenses={category.expenses}
            allExpenses={sumOfExpenses}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OverviewContainer;
