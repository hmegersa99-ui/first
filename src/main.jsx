import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DatingProvider } from "./context/DatingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DatingProvider>
      <App />
    </DatingProvider>
  </StrictMode>
);