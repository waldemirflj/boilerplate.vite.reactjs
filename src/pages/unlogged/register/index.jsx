import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

// contexts
import { AuthContext } from "../../../contexts/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
  confirmPassword: Yup.string()
    .min(4)
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords does not match"),
});

function Index() {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const onSubmit = async (value) => {
    alert(JSON.stringify(value, null, 4));
    // await signUp();
    // navigate("/admin");
  };

  return (
    <Container>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          resetForm,
          handleChange,
          handleSubmit,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className="h5 m-0 mt-4 mb-4">Cadastre-se</h1>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        name="name"
                        type="text"
                        value={values.name}
                        isValid={touched.name && !errors.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="&nbsp;"
                      />
                      <Form.Label className="text-dark text-opacity-75">
                        Nome completo
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col md={12} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        name="email"
                        type="email"
                        value={values.email}
                        isValid={touched.email && !errors.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="&nbsp;"
                      />
                      <Form.Label className="text-dark text-opacity-75">
                        E-mail
                      </Form.Label>
                    </Form.Floating>
                  </Col>

                  <Col md={6} className="mb-3">
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
                    </Form.Floating>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Floating>
                      <Form.Control
                        name="confirmPassword"
                        type="password"
                        value={values.confirmPassword}
                        isValid={
                          touched.confirmPassword && !errors.confirmPassword
                        }
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        placeholder="&nbsp;"
                      />
                      <Form.Label className="text-dark text-opacity-75">
                        Confirmar senha
                      </Form.Label>
                    </Form.Floating>
                  </Col>
                </Row>
                <Row className="g-3">
                  <Col sm={8}>
                    <Button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-success w-100"
                    >
                      Cadastre-se
                    </Button>
                  </Col>
                  <Col sm={4}>
                    <Button
                      type="reset"
                      className="btn btn-secondary w-100"
                      onClick={resetForm}
                    >
                      Cancelar
                    </Button>
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
