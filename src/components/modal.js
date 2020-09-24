import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const Modal = ({
  balance,
  updateBalance,
  updateStartBalance,
  currency,
  setCurrency,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [showModal, setShowModal] = useState(true);
  const URL = "https://api.exchangeratesapi.io/latest";

  const setBalanceAmount = (e) => {
    e.preventDefault();
    setCurrency(selectValue);
    updateBalance(
      Math.round((parseFloat(inputValue) + Number.EPSILON) * 100) / 100
    );
    updateStartBalance(
      Math.round((parseFloat(inputValue) + Number.EPSILON) * 100) / 100
    );
    setShowModal(false);
  };

  useEffect(() => {
    balance !== null && setShowModal(false);
  }, [balance]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCurrencies([data.base, ...Object.keys(data.rates)]));
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  const showAnimation = {
    show: { y: "10%" },
    hide: { y: "100%" },
  };

  return (
    <motion.div
      className="modal"
      initial="hide"
      animate={showModal ? "show" : "hide"}
      exit="hide"
      transition={{ duration: 1 }}
      variants={showAnimation}
    >
      <div className="inner-modal">
        <form onSubmit={setBalanceAmount}>
          <input
            type="number"
            placeholder="type your budget..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <select
            defaultValue={"default"}
            onChange={(e) => setSelectValue(e.target.value)}
            required
          >
            <option value="default" disabled>
              currency
            </option>
            {currencies.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button>let's start</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Modal;
