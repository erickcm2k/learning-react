import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count === 0 ? 0 : state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};
const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Current count is {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Restart</button>
    </>
  );
};

export default UseReduce;
