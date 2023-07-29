import { createRoot } from "react-dom/client"; // Update the import path
import React from "react";
import App from "../src/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
