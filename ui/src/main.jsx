import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import AllRoutes from "./AllRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllRoutes />
=======
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> e553ee305e9ccec90ccd3438da31f5bdb75df149
  </StrictMode>
);
