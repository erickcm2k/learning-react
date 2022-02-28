import React from "react";
import Functional from "./Functional";
import LanguageContext from "./LanguageContext";

const Example = () => {
  return (
    <>
      <LanguageContext>
        <Functional />
      </LanguageContext>
    </>
  );
};

export default Example;
