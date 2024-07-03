import { createRoot } from "react-dom/client";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./states";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
