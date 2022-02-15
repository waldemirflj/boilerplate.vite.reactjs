import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";

// contexts
import { AuthContext } from "../../../contexts/AuthProvider";

const initialValues = {
  login: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  login: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

function Index() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (value) => {
    alert(JSON.stringify(value, null, 4));
    await login();
    navigate("/admin");
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, isValid, handleSubmit, handleChange }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className="h5 m-0 mt-4 mb-4">Entrar</h1>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        name="login"
                        type="tel"
                        value={values.login}
                        isValid={touched.login && !errors.login}
                        onChange={handleChange}
                        isInvalid={!!errors.login}
                        placeholder="&nbsp;"
                      />
                      <Form.Label className="text-dark text-opacity-75">
                        E-mail
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        name="password"
                        type="password"
                        value={values.password}
                        isValid={touched.password && !errors.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        placeholder="&nbsp;"
                      />
                      <Form.Label className="text-dark text-opacity-75">
                        Senha
                      </Form.Label>
                      <Form.Text className="text-muted">
                        * Não compartilhe sua senha.
                      </Form.Text>
                    </Form.Floating>
                  </Col>
                </Row>
                <Row className="g-3">
                  <Col sm={6}>
                    <Button
                      type="submit"
                      className="btn btn-success w-100"
                      disabled={!isValid}
                    >
                      <FaSignInAlt className="me-2" /> Entrar
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <Link to="/register" className="btn btn-secondary w-100">
                      register
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Index;
