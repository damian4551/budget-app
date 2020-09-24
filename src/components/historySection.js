import React from "react";
import HistoryBox from "./historyBox";

import { motion } from "framer-motion";

const HistorySection = ({ currency, incomeItems, expenseItems }) => {
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
