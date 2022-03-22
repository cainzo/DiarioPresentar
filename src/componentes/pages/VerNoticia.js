import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../pages/verNoticia.css";
const VerNoticia = () => {
  const location = useLocation();
  console.log(location);
  const noticia = location.state;
  return (
    <Container className="pt-5 mt-5">
      <p>{noticia.categoria}</p>
      <h1>{noticia.titulo}</h1>
      <h3>{noticia.subtitulo}</h3>
      <img src={noticia.imgNoticia} alt="imagen referente a la noticia"  className="img"/>
      <p>{noticia.desarrollo}</p>
      <p>{noticia.autor}</p>
      <p>{noticia.createdAt}</p>
     
    </Container>
  );
};

export default VerNoticia;
