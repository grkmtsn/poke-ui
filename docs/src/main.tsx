import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@poke-ui/core";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme="fire">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
