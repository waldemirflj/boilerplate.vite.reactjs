import { Routes, Route } from "react-router-dom";

// shared
import Layout from "../../shared/UnloggedPage";

// ./
import Login from "./login";
import Register from "./register";

function Index() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default Index;
