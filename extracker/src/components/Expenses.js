import React, { useContext } from "react";
import { GlobalContext } from "../context/Global";

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Revenus</h4>
        <p className="money plus">{income}$</p>
      </div>
      <div>
        <h4>Dépenses</h4>
        <p className="money minus">{expense}$</p>
      </div>
    </div>
  );
};
