import React from "react";

//components
import Sidebar from "../components/sidebar";
import SettingsContainer from "../components/settingsContainer";

const Settings = ({
  balance,
  startBalance,
  currency,
  setBalance,
  setStartBalance,
  setCurrency,
}) => {
  return (
    <div className="app">
      <div className="flex">
        <Sidebar activeDashboard="false" activeSettings="true" />
        <SettingsContainer
          balance={balance}
          startBalance={startBalance}
          currency={currency}
          setBalance={setBalance}
          setStartBalance={setStartBalance}
          setCurrency={setCurrency}
        />
      </div>
    </div>
  );
};

export default Settings;
