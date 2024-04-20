import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from "./context/ApiContext.jsx";
import { InsertProvider } from "./context/InsertContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ApiProvider>
        <InsertProvider>
          <App />
        </InsertProvider>
      </ApiProvider>
    </Router>
  </React.StrictMode>
);
