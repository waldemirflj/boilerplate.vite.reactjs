import { Routes, Route } from "react-router-dom";

// pages
import Logged from "./pages/logged";
import Unlogged from "./pages/unlogged";

// shared
import PrivateRoute from "./shared/PrivateRoute";

// contexts
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
