import React from "react";
import {Card, Badge } from "react-bootstrap";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <Card className="m-1   cardcitas">
        <Badge pill className="categoria-card m-1 bg-danger">
          Economia
        </Badge>

        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/3526020/pexels-photo-3526020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="w-100 h-50 cardcita-img"
        />
        <Card.Body className="cardcitas-body pb-0">
          <Card.Title className="cardcitas-titulo">Card Title</Card.Title>
          <Card.Text className="cardcitas-desc">
            Some quick example text to build on the card title and make up the
            bulk of the card's
            content.klsajdklsajdkljaslkdjsalkdjaklsjdlksajdlkjaslkdjsalkjdlksajdlkasjdlkasjlkajdlkasjdlkasjlkdjaslkdjszlk
          </Card.Text>
          <Card.Footer className="cardcitas-footer text-end border-0 m-0 p-0 ">
            Last updated 3 minutos ago
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
