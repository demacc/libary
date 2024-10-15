import { useContext } from "react";
import { ThemeContexts } from "../contexts/ThemeContext";
export default function useTheme() {
  let contexts = useContext(ThemeContexts);
  if (contexts === undefined) {
    new Error("plz use themecontextProvider scope");
  }
  return contexts;
}
