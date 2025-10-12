import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import './Styles/main.css'
import "./Styles/colors.css";
import "./Styles/fonts.css";
import "./Styles/spacings.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
