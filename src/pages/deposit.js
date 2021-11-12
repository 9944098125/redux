import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Deposit() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  function onDeposit() {
    dispatch({ type: "DEPOSIT", payload: 10 });
  }

  return (
    <>
      <h1>Welcome to Deposit Page</h1>
      <h3>Balance: {balance}</h3>
      <button onClick={onDeposit}>Deposit</button>
    </>
  );
}
