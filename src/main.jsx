import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import process from "process";

import App from "./App.jsx";
import { WindowProvider } from "./context/WindowContext";

window.process = process;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </StrictMode>
);