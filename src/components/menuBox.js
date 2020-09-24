import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Bin } from "../bin.svg";
import { motion } from "framer-motion";

//context
import { ItemsContext } from "../context";

const MenuBox = ({ balance, setBalance, display }) => {
  const [items, setItems] = useContext(ItemsContext);
  const [sum, setSum] = useState(0);
  const [reavel, setReavel] = useState(false);

  const deleteSelected = () => {
    setItems(items.filter((item) => item.selected === false));
    setBalance(balance - sum);
  };

  const unselectItems = () => {
    setItems(
      items.map((item) =>
        item.selected === true
          ? {
              ...item,
              selected: false,
            }
          : item
      )
    );
  };

  useEffect(() => {
    setSum(0);
    items.find((item) => item.selected === true)
      ? setReavel(true)
      : setReavel(false);
    items.forEach(
      (item) => item.selected && setSum((sum) => item.amount + sum)
    );
  }, [items]);

  const openAnimation = {
    open: { y: "0%" },
    closed: { y: "100%" },
  };

  return (
    <motion.div
      className="menu-box"
      initial="closed"
      animate={reavel ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.6 }}
      variants={openAnimation}
      style={{ display: display }}
    >
      <Bin onClick={deleteSelected} />
      <div className="unselect" onClick={unselectItems} />
    </motion.div>
  );
};

export default MenuBox;
