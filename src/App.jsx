import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Terms from "./pages/Terms";
import DateTime from "./pages/DateTime";
import Places from "./pages/Places";
import Confirmation from "./pages/Confirmation";
import Success from "./pages/Success";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Welcome />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/date-time"
          element={<DateTime />}
        />

        <Route
          path="/places"
          element={<Places />}
        />

        <Route
          path="/confirmation"
          element={<Confirmation />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;