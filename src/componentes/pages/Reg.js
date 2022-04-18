import axios from "axios";
import React, {useState, } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Reg.css';

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await axios.post("/auth/register", {email, password})
      console.log("registrado correctamente")
      console.log("redireccionando a la pagina de login")
      navigate('/login');
    } catch (error) {
      console.log("no registrado" + error)
      
    }
  };
  return (
    <div className="login-page bg-danger" >
      <Form className="login-form" onSubmit={handleSubmit}>
          <h1 className="display-6">Registro de usuario:</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="cajitas" onChange={(e)=>{ setEmail(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control type="password" placeholder="Password" className="cajitas" onChange={(e)=>{ setPassword(e.target.value)}}/>
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
