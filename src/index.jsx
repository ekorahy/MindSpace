import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
