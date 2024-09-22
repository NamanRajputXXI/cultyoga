import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./AllRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllRoutes />
  </StrictMode>
);
