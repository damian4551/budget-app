import React, { useState, useEffect } from "react";
import HistoryBox from "./historyBox";

import { motion } from "framer-motion";

const HistorySection = ({ currency, incomeItems, expenseItems }) => {
  const [displayIncome, setDisplayIncome] = useState(true);
  const [displayExpense, setDisplayExpense] = useState(true);

  const width = window.innerWidth;

  const changeDisplay = () => {
    setDisplayIncome(!displayIncome);
    setDisplayExpense(!displayExpense);
  };

  useEffect(() => {
    width > 500 ? setDisplayExpense(true) : setDisplayExpense(false);
  }, [width]);

  return (
    <>
      <motion.div
        className="history"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 1 }}
      >
        <HistoryBox
          name="income"
          color="#7abd82"
          sign="+"
          items={incomeItems}
          currency={currency}
          display={displayIncome}
          changeDisplay={changeDisplay}
          text="expense"
        />
        <HistoryBox
          name="expense"
          color="#d35c5c"
          items={expenseItems}
          currency={currency}
          display={displayExpense}
          changeDisplay={changeDisplay}
          text="income"
        />
      </motion.div>
    </>
  );
};

export default HistorySection;
