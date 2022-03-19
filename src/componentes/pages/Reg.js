import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import './Reg.css';

const Reg = () => {
  return (
    <div className="login-page bg-danger" >
      <Form className="login-form ">
          <h1 className="display-6">Registro de usuario:</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="cajitas"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control type="password" placeholder="Password" className="cajitas"/>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-login" size='lg'>
          Submit
        </Button>
        <Form.Group className="mt-1 mx-2">
        
        </Form.Group>
      </Form>
    </div>
  );
};

export default Reg;
