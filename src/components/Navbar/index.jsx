import PropTypes from "prop-types";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAt } from "react-icons/fa";

function Index({ path }) {
  return (
    <Navbar bg="success" className="bg-opacity-75 border-bottom border-success">
      <Container>
        <Navbar.Brand
          as={Link}
          to={path}
          className="h5 text-uppercase m-0 text-white "
        >
          Meusite<span className="h6 fw-normal text-lowercase">.com.br</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link
            as={Button}
            onClick={() => alert("Contato")}
            className="text-white bg-transparent border-0"
          >
            <FaAt /> Contato
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

Index.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Index;
