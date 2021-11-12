import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Withdraw() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  function onWithdraw() {
    dispatch({ type: "WITHDRAW", payload: 5 });
  }

  return (
    <>
      <h1>Welcome to Withdraw Page</h1>
      <h3>Balance: {balance}</h3>
      <button onClick={onWithdraw}>Withdraw</button>
    </>
  );
}
