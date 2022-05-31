import React, { useContext, useState } from "react";
import axios from "axios";
import "./Signup.css";

import { Form, Button } from "react-bootstrap";
import { MyContext } from "./context";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {setUser} = useContext(MyContext)

  function handleSignup(e) {
      e.preventDefault();
    if (!email || !password) {
      alert("Enter Email or Password !!");
    }
    axios
      .post("http://localhost:5000/users", { email, password })
      .then(({ data }) => setUser(data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Form onSubmit={handleSignup}>
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
          Sign Up
        </Button>
      </Form>
    </>
  );
}
