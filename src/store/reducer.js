const initialState = {
  balance: 0,
};

/* this function takes two parameters */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload };
    /* we can't modify the state directly, so we are re-creating it and making a copy of it. */
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}
/* these all goes to the index.js, the root file and implemented there */
