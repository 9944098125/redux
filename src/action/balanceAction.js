export function deposit() {
  return { type: "DEPOSIT", payload: 10 };
}

export function loading() {
  return {
    type: "LOADING",
  };
}
/* this loading function is dispatched in the below function, 
so this loading function should be written in the top, before that depositAsync() function */
export function withdraw() {
  return { type: "WITHDRAW", payload: 5 };
}

export function withdrawAsync() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw());
    }, 3000);
  };
}

export function depositAsync() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 3000);
  };
}
/* this would get 5 seconds delayed and passed to the dispatch function of deposit */
