import React, { useContext, useState } from "react";
const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useLanguageUpdate = () => {
  return useContext(LanguageUpdateContext);
};

const LanguageProvider = ({ children }) => {
  const [english, setEnglishLanguage] = useState(true);

  const toggleLanguage = () => {
    setEnglishLanguage(!english);
  };

  return (
    <LanguageContext.Provider value={english}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
