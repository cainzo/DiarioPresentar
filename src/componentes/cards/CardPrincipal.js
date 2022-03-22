import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardprincipal.css";

const CardPrincipal = (props) => {
  return (
   
      <Link to="/vernoticia" state={props.noticiaProps}>
        <Card className="bg-dark text-white card-noticia-top mt-2">
          <a href="#" className="stretched-link"></a>
          <span className="categoria-card m-1 bg-danger">
            {props.noticiaProps.categoria}
          </span>
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
            <Card.Text>{props.noticiaProps.createdAt}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
  
  );
};

export default CardPrincipal;
