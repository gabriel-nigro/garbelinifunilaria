import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

// Google Analytics and Tag Manager
ReactGA.initialize("G-T2460GV2MY");
TagManager.initialize({ gtmId: "GTM-KQR28PQC" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
