import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Global";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    
  };

  return (
    <>
      <h3>Ajouter une nouvelle Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nom de la transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Montant <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Entrer le montant"
          />
        </div>
        <button className="btn">Ajouter transaction</button>
      </form>
    </>
  );
};
