import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({
  activeDashboard,
  activeSettings,
  activeOverview,
  display,
}) => {
  //color changing functions, bad code ;/
  const changeToBlue = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "";
    const bin = document.querySelector("svg");
    bin.style.fill = "#7ab9bd";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#7ab9bd";
    localStorage.setItem("color", "#7ab9bd");
  };

  const changeToGreen = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "#7abd82";
    const bin = document.querySelector("svg");
    bin.style.fill = "#7abd82";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#7abd82";
    localStorage.setItem("color", "#7abd82");
  };

  const changeToBrown = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "#bda17a";
    const bin = document.querySelector("svg");
    bin.style.fill = "#bda17a";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#bda17a";
    localStorage.setItem("color", "#bda17a");
  };

  const changeToRed = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "#bd7a7a";
    const bin = document.querySelector("svg");
    bin.style.fill = "#bd7a7a";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#bd7a7a";
    localStorage.setItem("color", "#bd7a7a");
  };

  const changeToViolet = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "#b87abd";
    const bin = document.querySelector("svg");
    bin.style.fill = "#b87abd";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#b87abd";
    localStorage.setItem("color", "#b87abd");
  };

  const changeToNavy = () => {
    const container = document.querySelector(".main");
    container.style.backgroundColor = "#3a3f55";
    const bin = document.querySelector("svg");
    bin.style.fill = "#3a3f55";
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = "#3a3f55";
    localStorage.setItem("color", "#3a3f55");
  };

  useEffect(() => {
    const color = localStorage.getItem("color");
    const container = document.querySelector(".main");
    container.style.backgroundColor = color;
    const bin = document.querySelector("svg");
    bin.style.fill = color;
    const unselect = document.querySelector(".unselect");
    unselect.style.borderColor = color;
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="logo">budget app.</div>
        <div className="navigation">
          <ul>
            <Link to="/">
              <li
                className={
                  activeDashboard === "true"
                    ? "navigation-item-active"
                    : "navigation-item"
                }
              >
                dashboard
              </li>
            </Link>
            <Link to="/settings">
              <li
                className={
                  activeSettings === "true"
                    ? "navigation-item-active"
                    : "navigation-item"
                }
              >
                settings
              </li>
            </Link>
            <Link to="/overview">
              <li
                className={
                  activeOverview === "true"
                    ? "navigation-item-active"
                    : "navigation-item"
                }
              >
                overview
              </li>
            </Link>
          </ul>
        </div>
        <div className="colors">
          <div className="color blue" onClick={changeToBlue} />
          <div className="color green" onClick={changeToGreen} />
          <div className="color brown" onClick={changeToBrown} />
          <div className="color red" onClick={changeToRed} />
          <div className="color violet" onClick={changeToViolet} />
          <div className="color navy" onClick={changeToNavy} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
