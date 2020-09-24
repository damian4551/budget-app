import React, { useContext, useState, useEffect } from "react";
import HistorySection from "./historySection";

//context
import { ItemsContext } from "../context";

import { motion } from "framer-motion";

const Main = ({
  balance,
  updateBalance,
  startBalance,
  profit,
  countProfit,
  setBalance,
  currency,
}) => {
  //imported states
  const [items, setItems] = useContext(ItemsContext);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);

  //states
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [incomeExpense, setIncomeExpense] = useState("");
  const [category, setCategory] = useState("");
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("counter")) || 0
  );

  const addItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: counter,
        amount:
          incomeExpense === "income"
            ? Math.round((parseFloat(amount) + Number.EPSILON) * 100) / 100
            : (-1 * Math.round((parseFloat(amount) + Number.EPSILON) * 100)) /
              100,
        title: title,
        incomeExpense: incomeExpense,
        category: category,
        selected: false,
      },
    ]);
    setCounter(counter + 1);
    updateBalance(incomeExpense, amount);
    setAmount("");
    setTitle("");
  };

  const clearEverything = () => {
    setItems([]);
    setCounter(0);
    setBalance(startBalance);
  };

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateIncomeExpense = (e) => {
    setIncomeExpense(e.target.value);
  };

  const updateCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("startBalance", JSON.stringify(startBalance));
    localStorage.setItem("counter", counter);
    setIncomeItems(items.filter((item) => item.incomeExpense === "income"));
    setExpenseItems(items.filter((item) => item.incomeExpense === "expense"));
    countProfit();
  }, [
    setCounter,
    counter,
    balance,
    items,
    startBalance,
    countProfit,
    setExpenseItems,
    setIncomeItems,
  ]);

  return (
    <div className="main">
      <motion.div
        className="inner-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="outside-text">
          <p> &gt; dashboard</p>
          <p className="clear-button" onClick={clearEverything}>
            reset
          </p>
        </div>
        <div className="container">
          <div className="balance-block">
            <h3 className="balance-text">balance</h3>
            <h2 className="balance-value">
              {balance === null ? 0 : balance}
              {currency === null ? "USD" : currency}
            </h2>
            <h6 className="status">
              {profit > 0 && "+"}
              {profit}
              {currency}
            </h6>
          </div>
          <div className="input-section">
            <form onSubmit={addItem}>
              <div className="input-container">
                <div className="row">
                  <input
                    type="number"
                    placeholder=" type an amount..."
                    value={amount}
                    onChange={updateAmount}
                    required
                  />
                  <input
                    type="text"
                    placeholder=" type a title..."
                    value={title}
                    onChange={updateTitle}
                    required
                  />
                </div>
                <div className="row">
                  <select
                    onChange={updateIncomeExpense}
                    required
                    defaultValue={"default"}
                  >
                    <option value="default" disabled>
                      income/expense
                    </option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                  <select
                    onChange={updateCategory}
                    required
                    defaultValue={"default"}
                  >
                    <option value="default" disabled>
                      category
                    </option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills</option>
                    <option value="travel">Travel</option>
                    <option value="fashion">Fashion</option>
                    <option value="other">Other...</option>
                  </select>
                </div>
              </div>
              <div className="btn-box">
                <button className="button">add</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <HistorySection
        currency={currency}
        incomeItems={incomeItems}
        expenseItems={expenseItems}
      />
    </div>
  );
};

export default Main;
