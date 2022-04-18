import { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import {campoRequerido, validarUrl} from "../../validaciones/helpers";
import { useNavigate } from "react-router-dom";
import "./nuevaNoticia.css";
import React from "react";
import { NoticiaContext } from "../../../context/noticiaContext/NoticiaContext";
import { crearNoticia } from "../../../context/noticiaContext/apiCalls";

const NuevaNoticia = (props) => {
  const [noticia, setNoticia] = useState();
 
  const navigate = useNavigate();
  const { dispatch } = useContext(NoticiaContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setNoticia({ ...noticia, [e.target.name]: value });
  };
  console.log(noticia);
  const handleSubmit = (e) => {
    e.preventDefault();
    crearNoticia(noticia, dispatch);
    navigate("/perfil");
  };

  return (
    <Row className="text-center ">
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

            <Form className="m-5" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Titulo de la noticia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="titulo"
                  onChange={handleChange}
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
                  name="subtitulo"
                  onChange={handleChange}
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
                  name="imgNoticia"
                  placeholder=""
                  onChange={handleChange}
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
                  name="desarrollo"
                  rows={3}
                  onChange={handleChange}
                  onBlur={(e) => {
                    campoRequerido(e.target);
                  }}
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                name="categoria"
                onChange={handleChange}
              >
                <option value="">Seleccione una categoria</option>
                {props.categorias.map((categoria) => {
                  return (
                    <option value={categoria.categoria}>
                      {categoria.categoria.charAt(0).toUpperCase() +
                        categoria.categoria.slice(1)}
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
                  name="autor"
                  onChange={handleChange}
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
