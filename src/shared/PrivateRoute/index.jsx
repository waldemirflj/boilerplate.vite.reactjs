import { useContext } from "react";
import { Navigate } from "react-router-dom";

// contexts
import { AuthContext } from "../../contexts/auth";

function Index({ children, redirectTo }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default Index;
