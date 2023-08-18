import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/components/Home";
import GlobalStyle from "./styles/globalStyles";
import { inject } from '@vercel/analytics';

inject()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);
