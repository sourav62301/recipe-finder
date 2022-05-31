import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { MyContext } from "./context";



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {setUser} = useContext(MyContext)

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter valid Email or Password !!");
    }
    axios
      .post("http://localhost:5000/login", { email, password })
      .then(({ data }) => setUser(data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>

        <Button variant="info"  type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}
