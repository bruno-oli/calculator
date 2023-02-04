import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeAppProvider from "./contexts/ThemeAppContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
);
