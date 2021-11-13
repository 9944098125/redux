import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../action/balanceAction";

export default function Deposit() {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.reducer.loading);
  const dispatch = useDispatch();
  function onDeposit() {
    dispatch(balanceActions.depositAsync());
  }

  return (
    <>
      <h1>Welcome to Deposit Page</h1>
      {loading ? <h2>DEPOSITING......</h2> : <h3>Balance: {balance}</h3>}
      <button onClick={onDeposit}>Deposit</button>
      <h3>{loan ? "Loan Applied already" : "Apply For Loan"}</h3>
    </>
  );
}
