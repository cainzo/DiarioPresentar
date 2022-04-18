import React, { useContext, useState } from "react";
import {Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {login } from "../../context/authContext/apiCalls";
import {AuthContext} from "../../context/authContext/AuthContext";
import './Login.css';

const Loginreg = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} =useContext(AuthContext)
  const handleLogin = (e)=>{
    e.preventDefault();
    login({email, password}, dispatch)
  }
  return (
    <div className="login-page bg-danger" >
      <Form className="login-form ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="cajitas" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control type="password" placeholder="Password" className="cajitas" onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-login" size='lg' onClick={handleLogin} disabled={isFetching}>
          Login
        </Button>
        <Form.Group className="mt-1 mx-2">
        <Form.Text className="text-light">
            No estas registrado? <Link to="/registro/">Click Aqui!</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Loginreg;
