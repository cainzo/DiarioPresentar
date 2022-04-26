import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import CardPrincipal from "../cards/CardPrincipal";
import PublicidadLarga from '../../img/publicidad1.png';
import PublicidadCuadrada from '../../img/publicuadrada1.jpg';

import { useLocation } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const listaNoticias = async () => {
      try {
        if (location === "") {
          const res = await axios.get(`https://proyecto-final-gonzalocainzo.herokuapp.com/api/noticias`);
          setNoticias(res.data);
        } else {
          const res = await axios.get("https://proyecto-final-gonzalocainzo.herokuapp.com/api/noticias" + location.search);
          setNoticias(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    listaNoticias();/* esta funcion para mostrar la lista de las noticias que nos da el backend segun la categoria que seleccionamos (location), si no hay categoria
    nos guarda las ultimas noticias sin filtros */
  }, [location]);

  const mostrarNoticiaa = () => {
    let i = 0;
    return noticias.map((x) => {
      i++;

      if (i === 1) {
        return <CardPrincipal key={x._id} noticiaProps={x}></CardPrincipal>;
      } else {
      }
    });
  };
  const mostrarNoticiaa2 = () => {
    let i = 0;
    return noticias.map((x) => {
      i++;
      if (i === 1) {
      } else {
        return (
          <Col key={x._id} lg={6} md={6} sm={6}>
            <CardPrincipal key={x._id} noticiaProps={x}></CardPrincipal>
          </Col>
        );
      }
    });
  };
  return (
    <>
      <Card className="w-100 bg-dark  shadow">
        <Card.Img
          src="https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Card image"
          className="w-100 img-titulado-home m-0 p-0"
        />
        <Card.ImgOverlay className="titulado-home">
          <h1 className="display-1 mb-0 pb-0 titulo">RollingPost</h1>
        </Card.ImgOverlay>
      </Card>
      <Container className="main">
        <Row>
          <Col lg={9} md={9} sm={9} className=" mt-4 mx-auto">
            {mostrarNoticiaa() /* mostrar la card mas grande*/}
            <img src={PublicidadLarga} alt="publi" className="w-100 my-5" />

            <Row>
              {
                mostrarNoticiaa2() /* segunda funcion para mostrar cards mas pequenas en este contenedor*/
              }
            </Row>
            <img src={PublicidadLarga} alt="publi" className="w-100 my-5" />
          </Col>
          <Col lg={3} md={3} sm={3} className="sidebar mt-4 mx-auto">
           <img src={PublicidadCuadrada} alt="publi" className="w-100 my-5" />
           <img src={PublicidadCuadrada} alt="publi" className="w-100 my-5"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
