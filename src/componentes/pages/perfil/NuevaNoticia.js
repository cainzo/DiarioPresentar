import { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { campoRequerido, validarUrl } from "../../validaciones/helpers";

import "./nuevaNoticia.css";
import React from "react";
import { NoticiaContext } from "../../../context/noticiaContext/NoticiaContext";
import { crearNoticia } from "../../../context/noticiaContext/apiCalls";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./nuevaNoticia.css";

const NuevaNoticia = (props) => {
  const [noticia, setNoticia] = useState({});
  const [titulo, setTitulo] = useState();
  const [subTitulo, setSubTitulo] = useState();
  const [imgNoticia, setImgNoticia] = useState();
  const [desarrollo, setDesarrollo] = useState();
  const [autor, setAutor] = useState();
  const [categoria, setCategoria] = useState();

  const { dispatch } = useContext(NoticiaContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    setNoticia({
      titulo: titulo,
      subtitulo: subTitulo,
      imgNoticia: imgNoticia,
      desarrollo: desarrollo,
      autor: autor,
      categoria: categoria,
    });
  }, [titulo, subTitulo, imgNoticia, desarrollo, autor, categoria]);
  const handleSubmit = (e) => {
    e.preventDefault();
    crearNoticia(noticia, dispatch);
  };

  return (
    <Row className="text-center ">
      <Col lg={2} md={2} xs={12} className=" bg-light">
        {/* container de la sidebar  */}
        <Container className=" m-0 p-0 pt-5 sticky-top text-start ">
          <Sidebar></Sidebar>
        </Container>
      </Col>
      <Col lg={10} md={10} xs={12}>
        <Row className=" p-1">
          {/*  Form Nueva Noticia */}
          <Col lg={12} md={12} sm={12} className="mt-5 p-5 w-100 text-start">
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
                  name="subtitulo"
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
                  name="imgNoticia"
                  placeholder=""
                  onChange={(e) => {
                    setImgNoticia(e.target.value);
                  }}
                  onBlur={(e) => {
                    validarUrl(e.target);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 border"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Desarrollo de la noticia</Form.Label>

                <Editor
                  toolbar={{
                    options: ["inline", "list", "textAlign"],
                    inline: {
                      inDropdown: false,
                      options: [
                        "italic",
                        "underline",
                        "strikethrough",
                        "monospace",
                        "superscript",
                        "subscript",
                      ],
                    },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                  editorState={editorState}
                  onEditorStateChange={(newState) => {
                    setEditorState(newState);
                    setDesarrollo(
                      draftToHtml(convertToRaw(newState.getCurrentContent()))
                    );
                  }}
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                name="categoria"
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
              >
                <option value="">Seleccione una categoria</option>
                {props.categorias.map((categoria) => {
                  return (
                    <option key={categoria._id} value={categoria.categoria}>
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
