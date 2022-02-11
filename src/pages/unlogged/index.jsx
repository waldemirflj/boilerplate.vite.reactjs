import { useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Login from "./login";
import Register from "./register";

function Index() {
  useEffect(() => {
    console.log("unlogged...");
  }, []);

  return (
    <div>
      <h1>it's unlogged</h1>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: 5 }}>
          <Link to="/">login</Link>
        </li>
        <li style={{ padding: 5 }}>
          <Link to="/register">register</Link>
        </li>
      </ul>

      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Index;
