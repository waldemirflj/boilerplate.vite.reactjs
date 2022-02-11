import { useContext, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

// contexts
import { AuthContext } from "../../contexts/auth";

import Home from "./home";
import Products from "./products";

function Index() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    console.log("logged...");
  }, []);

  return (
    <div>
      <h1>it's unlogged</h1>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: 5 }}>
          <Link to="/admin">home</Link>
        </li>
        <li style={{ padding: 5 }}>
          <Link to="/admin/products">products</Link>
        </li>
        <li style={{ padding: 5 }}>
          <button onClick={logout}>logout</button>
        </li>
      </ul>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Index;
