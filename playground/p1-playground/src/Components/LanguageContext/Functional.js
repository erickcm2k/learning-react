import React from "react";
import { useLanguage, useLanguageUpdate } from "./LanguageContext";

const FunctionExample = () => {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const mainMessage = language ? "Hola, mundo" : "Hello world";
  const message = language ? "Probando useContext" : "Trying useContext";
  const buttonText = language ? "Cambiar idioma" : "Switch language";
  return (
    <React.Fragment>
      <button onClick={toggleLanguage}>{buttonText}</button>
      <div>{mainMessage}</div>
      <div>{message}</div>
    </React.Fragment>
  );
};

export default FunctionExample;
