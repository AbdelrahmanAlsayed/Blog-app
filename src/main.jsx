import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { store } from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/OtherPages/ScrollToTop";
import OneSignalSDK from "./components/OneSignalSDK";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <OneSignalSDK />
        <App />
        <ScrollToTop />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
