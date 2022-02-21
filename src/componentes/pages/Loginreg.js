import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import './Loginreg.css';

const Loginreg = () => {
  return (
    <div className="login-page bg-danger" >
      <Form className="login-form ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="cajitas"/>
          <Form.Text className="text-light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="cajitas"/>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-login" size='lg'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Loginreg;
