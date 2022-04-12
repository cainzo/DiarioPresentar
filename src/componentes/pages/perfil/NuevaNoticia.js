import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Table, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { campoRequerido, datoRequerido, validarEmail, validarUrl } from "../../validaciones/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "./perfilAdmin.css";

import "./nuevaNoticia.css";
import React from "react";

const NuevaNoticia = (props) => {
    const [titulo, setTitulo] = useState('');
    const [subTitulo, setSubTitulo] = useState('');
    const [imagenPrincipal, setImagenPrincipal] = useState('');
    const [desarrollo, setDesarrollo] = useState('');
    const [autor, setAutor] = useState('');
    const [tipo, setTipo] = useState('');
    const navigation = useNavigate();
    
  
    useEffect(() => {


       
    }, []);
    const handleSubmit = (e)=>{
      e.preventDefault();


      
    }

  return (
    <Row className="text-center vh-100 overflow-hidden">
      <Col lg={2} md={2} xs={12} className="bg-light">
        {/* container de la sidebar  */}
        <Container className=" m-0 p-0 pt-5 sticky-top text-start ">
          <Sidebar></Sidebar>
        </Container>
      </Col>
      <Col lg={10} md={10} xs={12}>
        <Row className=" p-1">
          {/*  Form Nueva Noticia */}
          <Col lg={12} md={12} sm={12} className="mt-5 w-100 text-start">
            <h3>Crear noticia:</h3>
            <Form className="m-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Titulo de la noticia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setTitulo(e.target.value);
                  }}
                  onBlur={(e) => {
                    campoRequerido(e.target);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Subtitulo o descripcion breve</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setSubTitulo(e.target.value);
                  }}
                  onBlur={(e) => {
                    campoRequerido(e.target);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Imagen principal de la noticia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setImagenPrincipal(e.target.value);
                  }}
                  onBlur={(e) => {
                    validarUrl(e.target);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Desarrollo de la noticia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    setDesarrollo(e.target.value);
                  }}
                  onBlur={(e) => {
                    campoRequerido(e.target);
                  }}
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setTipo(e.target.value);
                }}
              >
                <option value="">Seleccione una categoria</option>
                {props.categorias.map((categoria) => {
                  return (
                    <option value={categoria.id}>
                      {categoria.categoria.charAt(0).toUpperCase() + categoria.categoria.slice(1)}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Firma Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setAutor(e.target.value);
                  }}
                  onBlur={(e) => {
                    campoRequerido(e.target);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-50">
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NuevaNoticia;
