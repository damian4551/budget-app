import React, { useState, useEffect } from "react";
import "./styles/globalstyles.scss";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

//pages
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Overview from "./pages/overview";

//context
import { ItemsProvider } from "./context";

function App() {
  const [balance, setBalance] = useState(
    JSON.parse(localStorage.getItem("balance")) || null
  );
  const [startBalance, setStartBalance] = useState(
    JSON.parse(localStorage.getItem("startBalance")) || null
  );

  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem("currency")) || null
  );
  const location = useLocation();

  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <ItemsProvider>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Dashboard
              balance={balance}
              setBalance={setBalance}
              startBalance={startBalance}
              setStartBalance={setStartBalance}
              currency={currency}
              setCurrency={setCurrency}
            />
          </Route>
          <Route path="/settings" exact>
            <Settings
              balance={balance}
              setBalance={setBalance}
              startBalance={startBalance}
              setStartBalance={setStartBalance}
              currency={currency}
              setCurrency={setCurrency}
            />
          </Route>
          <Route path="/overview" exact>
            <Overview />
          </Route>
        </Switch>
      </AnimatePresence>
    </ItemsProvider>
  );
}

export default App;
