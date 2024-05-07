import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "INCREMENT_BY_VALUE":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col">
      <p>Count: {state.count}</p>
      <div className="flex gap-3">
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() =>
            dispatch({ type: "INCREMENT_BY_VALUE", payload: parseInt(value) })
          }
        >
          Increment by{" "}
        </button>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          className="border"
          inputMode="numeric"
          pattern="\d*"
        />
      </div>
    </div>
  );
};

export default Counter;
