import React, { useEffect, useContext, useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { campoRequerido, validarUrl } from "../../validaciones/helpers";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { NoticiaContext } from "../../../context/noticiaContext/NoticiaContext";
import { updateNoticia } from "../../../context/noticiaContext/apiCalls";

    
      
export default function EditarNoticia(props) {

  const location = useLocation();
  /** pasamos la noticia en la que clikeamos en un state en location y el cual es asignado a la variable "noti" */
  const noti = location.state;
  /** hooks para llenar los campos del form con las informacio de la noticia a la que vamos a editar */
  const [noticia, setNoticia] = useState();
  const [titulo, setTitulo] = useState(noti.titulo);
  const [subtitulo, setSubTitulo] = useState(noti.subtitulo);
  const [desarrollo, setDesarrollo] = useState(noti.desarrollo);
  const [imgNoticia, setImgNoticia] = useState(noti.imgNoticia);
  const [autor, setAutor] = useState(noti.autor);
  const [categoria, setCategoria] = useState(noti.categoria);
  const { dispatch } = useContext(NoticiaContext);
  const tituloNoticiaRef = useRef('');
  const subTituloNoticiaRef = useRef('');
  const imgPrincipalNoticiaRef = useRef('');
  const desarrolloNoticiaRef = useRef('');
  const autorNoticiaRef = useRef('');
  const categoriaNoticiaRef = useRef(0);

  useEffect(()=>{
    setNoticia({
      titulo: titulo,
      subtitulo: subtitulo,
      desarrollo:desarrollo,
      imgNoticia: imgNoticia,
      autor: autor,
      categoria: categoria
    })
  },[])

/** funcion para crear el obj final que vamos a updatear por el anterior */
  const handleChange = (e)=>{
    const value = e.target.value;
    setNoticia({...noticia, [e.target.name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // mandamos el id de la noticia sin editar y el obj noticia para sobreescribirlo en la DB
    updateNoticia(noti._id ,noticia, dispatch)
  };

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
            <h3>Editar noticia:</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo de la noticia</Form.Label>
                <Form.Control type="text" placeholder="" 
                defaultValue={noti.titulo} ref={tituloNoticiaRef}
                name="titulo"
                onChange={handleChange} 
                onBlur={(e)=>{campoRequerido(e.target)}}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Subtitulo o descripcion breve</Form.Label>
                <Form.Control type="text" placeholder="" 
                defaultValue={noti.subtitulo} ref={subTituloNoticiaRef}
                name="subtitulo"
                onChange={handleChange} 
                onBlur={(e)=>{campoRequerido(e.target)}}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Imagen principal de la noticia</Form.Label>
                <Form.Control type="text" placeholder="" 
                defaultValue={noti.imgNoticia} ref={imgPrincipalNoticiaRef}
                name="imgNoticia"
                onChange={handleChange}
                onBlur={(e)=>{validarUrl(e.target)}}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Desarrollo de la noticia</Form.Label>
                <Form.Control as="textarea" rows={3} 
                defaultValue={noti.desarrollo} ref={desarrolloNoticiaRef}
                name="desarrollo"
                onChange={handleChange}
                onBlur={(e)=>{campoRequerido(e.target)}}/>
              </Form.Group>
              <Form.Select aria-label="Default select example" defaultValue={noti.categoria} ref={categoriaNoticiaRef} name="categoria" onChange={handleChange}>
                <option value="">Seleccione una categoria</option>
                {props.categorias.map((categoria)=>{return <option value={categoria.categoria}>{categoria.categoria}</option>})}
              </Form.Select>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Firma Autor</Form.Label>
                <Form.Control type="text" placeholder="" 
                defaultValue={noti.autor} ref={autorNoticiaRef}
                name="autor"
                onChange={handleChange}
                onBlur={(e)=>{campoRequerido(e.target)}}/>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                  Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
