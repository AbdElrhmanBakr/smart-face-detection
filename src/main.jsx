import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./container/App";
import { ClarifaiProvider } from "./context/ClarifaiContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ClarifaiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClarifaiProvider>
    </UserProvider>
  </React.StrictMode>
);
