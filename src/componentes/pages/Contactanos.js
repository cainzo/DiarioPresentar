import React, {useState, useRef} from 'react';
import {Form, Button,Row, Col,  Container} from "react-bootstrap";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contactanos = () => {
    const [validated, setValidated] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      sendEmail(e);
      setValidated(true);
    };
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_3qybe14', 'template_nvmoh5d', form.current, 'oQC7R0EXPCG5FCdLH')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              text: 'Se a enviado el email!',
            })
        }, (error) => {
          Swal.fire({
            icon: 'error',
            text: 'No se a podido enviar!',
          })
        });
    };

    return (
        <Container className='my-5 py-5'>
          
          <h1 className='my-0 py-0 mb-5 '>Mandenos un mensaje:</h1>
            <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            required
            name='from_name'
            type="text"
            placeholder="Ingrese su nombre"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name='reply_to'
            type="Email"
            placeholder="Ingrese su email"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Ingrese su consulta:</Form.Label>
          <Form.Control  as="textarea" rows={3}  type="text" placeholder="Escriba aqui" name='message' required />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
     
      <Button type="submit">Enviar</Button>
    </Form>
        </Container>
    );
};

export default Contactanos;