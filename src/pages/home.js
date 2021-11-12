import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const balance = useSelector((state) => state.balance);
  return <h1>Welcome to Home Page AND balance is {balance}</h1>;
}
