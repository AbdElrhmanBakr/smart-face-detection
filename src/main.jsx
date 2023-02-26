import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./container/App";
import { ClarifaiProvider } from "./context/ClarifaiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClarifaiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClarifaiProvider>
  </React.StrictMode>
);
