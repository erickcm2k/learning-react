import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionExample = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <React.Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </React.Fragment>
  );
};

export default FunctionExample;
