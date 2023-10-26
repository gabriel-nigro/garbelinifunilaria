// React
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components
import App from "./App.jsx";

// Google Analytics and Tag Manager
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

ReactGA.initialize("G-T2460GV2MY");
TagManager.initialize({ gtmId: "GTM-KQR28PQC" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
