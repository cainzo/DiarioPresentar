import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Reg.css";
import Swal from "sweetalert2";

const Reg = () => {
  var bcrypt = require("bcryptjs");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const hashContrasena = (x) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(x, salt, function (err, hash) {
        // Store hash in your password
        setPassword(hash);
      });
    });
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://proyecto-final-gonzalocainzo.herokuapp.com/api/auth/register", { email, password });
      Swal.fire({
        icon: "success",
        text: "Cuenta creada con exito",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response.data.messages,
      });
    }
  };
  return (
    <div className="login-page bg-danger">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="display-6">Registro de usuario:</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="cajitas"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="cajitas"
            onChange={(e) => {
               hashContrasena(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="submit-login"
          size="lg"
        >
          Submit
        </Button>
        <Form.Group className="mt-1 mx-2"></Form.Group>
      </Form>
    </div>
  );
};

export default Reg;
