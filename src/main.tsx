import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ControllerProvider } from "./components/ControllerProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ControllerProvider>
      <App />
    </ControllerProvider>
  </React.StrictMode>,
);
