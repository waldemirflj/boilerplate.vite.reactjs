import PropTypes from "prop-types";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

// components
import Navbar from "../../components/Navbar";

function Index({ children }) {
  useEffect(() => {
    console.log("I'm logged in");
  }, []);

  return (
    <>
      <Navbar path="/admin" />

      <Container fluid className="h-100">
        {children}
      </Container>
    </>
  );
}

Index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Index;
