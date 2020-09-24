import React, { useContext } from "react";
import HistoryBox from "./historyBox";

import { motion } from "framer-motion";

//context
import { ExpenseContext, IncomeContext } from "../context";

const HistorySection = ({ currency }) => {
  const [incomeItems] = useContext(IncomeContext);
  const [expenseItems] = useContext(ExpenseContext);

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
        />
        <HistoryBox
          name="expense"
          color="#d35c5c"
          items={expenseItems}
          currency={currency}
        />
      </motion.div>
    </>
  );
};

export default HistorySection;
