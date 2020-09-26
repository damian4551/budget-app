import React, { useState } from "react";

//components
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import MenuBox from "../components/menuBox";
import Modal from "../components/modal";

const Dashboard = ({
  balance,
  setBalance,
  startBalance,
  setStartBalance,
  currency,
  setCurrency,
}) => {
  const [profit, setProfit] = useState(startBalance);

  const updateBalance = (incomeExpense, amount) => {
    if (incomeExpense === "income") {
      setBalance(
        Math.round((balance + parseFloat(amount) + Number.EPSILON) * 100) / 100
      );
    } else {
      setBalance(
        Math.round((balance - parseFloat(amount) + Number.EPSILON) * 100) / 100
      );
    }
  };

  const countProfit = () => {
    setProfit(
      Math.round((balance - startBalance + Number.EPSILON) * 100) / 100
    );
  };
  return (
    <div className="app">
      <div className="flex">
        <Sidebar
          activeDashboard="true"
          activeSettings="false"
          activeOverview="false"
        />
        <Main
          balance={balance}
          updateBalance={updateBalance}
          startBalance={startBalance}
          profit={profit}
          countProfit={countProfit}
          setBalance={setBalance}
          currency={currency}
        />
        <Modal
          balance={balance}
          updateBalance={setBalance}
          updateStartBalance={setStartBalance}
          currency={currency}
          setCurrency={setCurrency}
        />
        <div className="menu-container">
          <MenuBox balance={balance} setBalance={setBalance} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
