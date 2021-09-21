import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { BanksProvider } from "./store/banks-context";
import "./index.css";

ReactDOM.render(
  <BanksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BanksProvider>,
  document.getElementById("root")
);
