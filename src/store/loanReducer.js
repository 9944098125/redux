const initialState = {
  loan: false,
};

/* this function takes two parameters */
export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true };
    default:
      return state;
  }
}
/* these all goes to the index.js, the root file and implemented there */
