import { Routes, Route } from "react-router-dom";

// contexts
import Auth from "./contexts/auth";

// pages
import Logged from "./pages/logged";
import Unlogged from "./pages/unlogged";

// shared
import PrivateRoute from "./shared/PrivateRoute";

function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/*" element={<Unlogged />} />

        <Route
          path="/admin/*"
          element={
            <PrivateRoute redirectTo="/">
              <Logged />
            </PrivateRoute>
          }
        />
      </Routes>
    </Auth>
  );
}

export default App;
