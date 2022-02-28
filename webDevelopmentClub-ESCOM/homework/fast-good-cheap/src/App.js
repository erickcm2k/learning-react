import React, { useReducer } from "react";

import "./App.css";

const initialState = { lifeStuff: [] };

const randomKill = () => Math.round(Math.random());

function reducer(state, action) {
  switch (action.type) {
    case "fast":
      if (state.lifeStuff.find((e) => e === "fast")) {
        return { lifeStuff: [...state.lifeStuff.filter((e) => e !== "fast")] };
      }

      if (state.lifeStuff.length === 2) {
        return {
          lifeStuff: [...state.lifeStuff.splice(randomKill(), 1), "fast"],
        };
      }

      return { lifeStuff: [...state.lifeStuff, "fast"] };

    case "good":
      if (state.lifeStuff.find((e) => e === "good")) {
        return { lifeStuff: [...state.lifeStuff.filter((e) => e !== "good")] };
      }

      if (state.lifeStuff.length === 2) {
        return {
          lifeStuff: [...state.lifeStuff.splice(randomKill(), 1), "good"],
        };
      }

      return { lifeStuff: [...state.lifeStuff, "good"] };

    case "cheap":
      if (state.lifeStuff.find((e) => e === "cheap")) {
        return { lifeStuff: [...state.lifeStuff.filter((e) => e !== "cheap")] };
      }

      if (state.lifeStuff.length === 2) {
        return {
          lifeStuff: [...state.lifeStuff.splice(randomKill(), 1), "cheap"],
        };
      }

      return { lifeStuff: [...state.lifeStuff, "cheap"] };

    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Stuff: {state.lifeStuff.map((e) => `${e} `)}
      </h1>

      <div className="button-container">
        <button
          style={{
            backgroundColor: state.lifeStuff.find((e) => e === "fast")
              ? "red"
              : "beige",
          }}
          onClick={() => dispatch({ type: "fast" })}
        >
          Fast
        </button>
        <button
          style={{
            backgroundColor: state.lifeStuff.find((e) => e === "good")
              ? "blue"
              : "beige",
          }}
          onClick={() => dispatch({ type: "good" })}
        >
          Good
        </button>
        <button
          style={{
            backgroundColor: state.lifeStuff.find((e) => e === "cheap")
              ? "green"
              : "beige",
          }}
          onClick={() => dispatch({ type: "cheap" })}
        >
          Cheap
        </button>
      </div>
    </>
  );
}

export default App;
