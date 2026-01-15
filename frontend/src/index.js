import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

console.log("React mounting...");
const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

const root = ReactDOM.createRoot(rootElement);
console.log("Root created, rendering App...");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("App rendered");
