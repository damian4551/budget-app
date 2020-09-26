import React from "react";

const CategoryItem = ({ category, expenses, allExpenses }) => {
  let currentCurrency = localStorage.getItem("currency");

  // removing "" from a string
  currentCurrency = currentCurrency.slice(1, -1);

  return (
    <div className="category-item">
      <div className="inner-category-item">
        <div className="category-text-box">
          <h4 className="title">{category}</h4>
          <p className="info">
            You have spent {expenses}
            {currentCurrency} on {category}, it's{" "}
            {allExpenses === 0
              ? 0
              : Math.round(
                  (parseFloat(expenses / allExpenses) + Number.EPSILON) * 100
                )}
            % of your all expenses
          </p>
        </div>
        <div className="category-bar">
          <div
            className="inner-bar"
            style={{
              width: `${
                (allExpenses === 0 ? 0 : expenses / allExpenses) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
