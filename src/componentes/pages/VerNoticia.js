import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../pages/verNoticia.css";

const VerNoticia = () => {
  const location = useLocation();
  const noticia = location.state;

  return (
    <Container className="pt-5">
      <Container className="d-flex justify-content-between mt-5">
      <p className="categoria ">{noticia.categoria}</p>
      <p className="fecha ">Fecha: { noticia.createdAt.slice(0,10)}</p>
      </Container>
      <img src={noticia.imgNoticia} alt="imagen referente a la noticia"  className="img "/>
      <h1 className="titulo text-start">{noticia.titulo}</h1>
      <h5 className="subtitulo">{noticia.subtitulo}</h5>
      <div className="desarrollo text-start" dangerouslySetInnerHTML={{ __html:noticia.desarrollo }}></div>
      <p className="autor text-end">Autor: {noticia.autor}</p>
     
    </Container>
  );
};

export default VerNoticia;
