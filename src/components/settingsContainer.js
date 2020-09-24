import React, { useState, useEffect, useContext } from "react";

import MenuBox from "./menuBox";

import { ItemsContext } from "../context";

import { motion } from "framer-motion";

const SettingsContainer = ({
  balance,
  startBalance,
  currency,
  setBalance,
  setStartBalance,
  setCurrency,
}) => {
  const [items, setItems] = useContext(ItemsContext);

  const [inputValue, setInputValue] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState();
  const URL = "https://api.exchangeratesapi.io/latest";

  const convertItems = () => {
    setItems(
      items.map((item) => ({
        ...item,
        amount:
          Math.round(
            (parseFloat(item.amount * exchangeRate) + Number.EPSILON) * 100
          ) / 100,
      }))
    );
  };

  const changeBalance = () => {
    if (selectValue !== "") {
      setCurrency(selectValue);
    }
    setBalance(
      Math.round((parseFloat(balance * exchangeRate) + Number.EPSILON) * 100) /
        100
    );
    convertItems();
    setStartBalance(
      Math.round(
        (parseFloat(startBalance * exchangeRate) + Number.EPSILON) * 100
      ) / 100
    );
    if (inputValue !== "") {
      setBalance(
        Math.round((parseFloat(inputValue) + Number.EPSILON) * 100) / 100
      );
      setStartBalance(
        Math.round((parseFloat(inputValue) + Number.EPSILON) * 100) / 100
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("startBalance", JSON.stringify(startBalance));
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [balance, startBalance, currency]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCurrencies([data.base, ...Object.keys(data.rates)]));
  }, []);

  useEffect(() => {
    if (selectValue !== currency && currency !== null) {
      fetch(`${URL}?base=${currency}&symbols=${selectValue}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[selectValue]));
    } else {
      setExchangeRate(1);
    }
  }, [selectValue, currency]);

  return (
    <div className="main">
      <motion.div
        className="inner-settings"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 1 }}
      >
        <div className="text-box">
          <p> &gt; settings</p>
        </div>
        <div className="options">
          <div className="option">
            <p> change currency:</p>
            <select
              defaultValue={"default"}
              onChange={(e) => setSelectValue(e.target.value)}
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
          </div>
          <div className="option">
            <p> change balance:</p>
            <input
              type="number"
              placeholder="new balance..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-block">
          <button onClick={changeBalance}>save</button>
        </div>
      </motion.div>
      <MenuBox balance={balance} setBalance={setBalance} display="none" />
    </div>
  );
};

export default SettingsContainer;
