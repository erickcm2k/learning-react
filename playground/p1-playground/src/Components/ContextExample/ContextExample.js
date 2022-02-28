import React from "react";
import FunctionExample from "./FunctionExample";
import ThemeProvider from "./ThemeContext";

const ContextExample = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionExample />
      </ThemeProvider>
    </>
  );
};

export default ContextExample;
