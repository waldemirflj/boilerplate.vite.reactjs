import PropTypes from "prop-types";
import { useContext } from "react";
import { Container, Nav, Navbar, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaCircle, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

// contexts
import { AuthContext } from "../../contexts/AuthProvider";

function Index() {
  const { logout } = useContext(AuthContext);

  return (
    <Row>
      <Navbar bg="light" className="border-bottom">
        <Container className="p-0">
          <Nav>
            <Nav.Link as={Link} to="" className="d-flex align-items-center">
              <FaHome className="me-2" /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="products"
              className="d-flex align-items-center"
            >
              <FaCircle className="me-2" /> Produtos
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="perfil"
              className="d-flex align-items-center"
            >
              <FaUserCircle className="me-2" /> Waldemir F...
            </Nav.Link>
            <Nav.Link
              as={Button}
              onClick={logout}
              className="d-flex align-items-center bg-transparent border-0"
            >
              <FaSignOutAlt className="me-2" /> Sair
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Row>
  );
}

Index.propTypes = {};

export default Index;
