// theme context create

import { createContext } from "react";

const ThemeContexts = createContext();

//theme context provider components

const ThemeContextsProvider = ({ children }) => {
  return (
    <ThemeContexts.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContexts.Provider>
  );
};

export { ThemeContexts, ThemeContextsProvider };
