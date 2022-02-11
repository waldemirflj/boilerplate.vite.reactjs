import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { AuthContext } from "../../../contexts/auth";

function Index() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    login();
    navigate("/admin");
  };

  return (
    <div>
      <h1>login page</h1>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: 5 }}>
          <button onClick={handleLogin}>login</button>
        </li>
      </ul>
    </div>
  );
}

export default Index;
