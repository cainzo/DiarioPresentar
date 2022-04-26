import React from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardprincipal.css";

const CardPrincipal = (props) => {
  return (
    <Link to="/vernoticia" state={props.noticiaProps}>
      <Card className="bg-dark text-white card-noticia-top mt-2">
        <Badge pill className="categoria-card m-1 bg-success">
          {props.noticiaProps.categoria.charAt(0).toUpperCase() +
            props.noticiaProps.categoria.slice(1)}
        </Badge>
        <Card.Img
          src={props.noticiaProps.imgNoticia}
          alt="Card image"
          className="img-bg-card"
        />

        <Card.ImgOverlay className="overlay">

          <Card.Title>{props.noticiaProps.titulo}</Card.Title>
          <Card.Text className="card-descripcion">
            {props.noticiaProps.subtitulo}
          </Card.Text>
          <Container className="d-flex justify-content-between m-0 p-0">
          <Card.Text>{props.noticiaProps.createdAt.slice(0,10)} Por: {props.noticiaProps.autor}</Card.Text>
   
          </Container>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};

export default CardPrincipal;
