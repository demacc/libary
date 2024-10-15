import { createRoot } from "react-dom/client";
import router from "./router/index";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeContextsProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeContextsProvider>
    <RouterProvider router={router} />
  </ThemeContextsProvider>
);
