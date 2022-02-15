import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// shared
import Layout from "../../shared/LoggedPage";
import SubNavbar from "../../shared/SubNavbar";

import Home from "./home";
import Products from "./products";
import Perfil from "./perfil";

function Index() {
  return (
    <Layout>
      <SubNavbar />

      <Container className="p-3">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default Index;
