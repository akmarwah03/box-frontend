import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Login = ({ showRegister }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch("/192.168.1.122:8000/auth/signin", {
      method: "POST",
      body: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const [formErorrs, setFormErrors] = useState("");

  return (
    <Form className="m-3" onSubmit={onSubmit}>
      <h2 className="auth-header">Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          <span className="error"></span>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" name="password" placeholder="Password" />
        <Form.Text className="text-muted">
          <span className="error"></span>
        </Form.Text>
      </Form.Group>

      <div className="button-container">
        <Button variant="primary" type="submit" className="primary-button">
          Login
        </Button>
        <Button
          variant="secondary"
          className="secondary-button"
          onClick={showRegister}
        >
          Register
        </Button>
      </div>
    </Form>
  );
};

export default Login;
