// theme context create

import { createContext, useReducer } from "react";

const ThemeContexts = createContext();

//theme context provider components

let ThemeReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const ThemeContextsProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ThemeReducer, {
    theme: "dark",
  });

  let changeTheme = () => {
    // action -> type + payload
    dispatch({ type: "CHANGE_THEME", payload: "light" });
  };

  return (
    <ThemeContexts.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContexts.Provider>
  );
};

export { ThemeContexts, ThemeContextsProvider };
