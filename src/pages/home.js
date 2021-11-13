import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const balance = useSelector((state) => state.reducer.balance);
  const loan = useSelector(
    (state) => state.loanReducer.loan
  ); /* we are bringing the loan and balance state from 
  reducer and loan reducer , they were declared as states there and 
  we are bringing the values for showing them in the web-page */
  const dispatch = useDispatch();
  function applyLoan() {
    dispatch({ type: "APPLY" });
  }
  return (
    <>
      <h1>Welcome to Home Page AND balance is {balance}</h1>
      <h3>{loan ? "LOAN APPLIED" : "DO YOU NEED LOAN ?"}</h3>
      <button onClick={applyLoan}>{loan ? "DONE" : "APPLY"}</button>
    </>
  );
}
