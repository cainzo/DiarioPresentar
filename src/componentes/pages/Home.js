import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import CardPrincipal from "../cards/CardPrincipal";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const location = useLocation();
  console.log(location.search);
  useEffect(() => {
    const listaNoticias = async () => {
      try {
        //const res = await axios.get(`noticias${categoria ? "?categoria=" + categoria : ""}`,{headers:{token: "Bearer " + TOKENCUANDO TENGA EL LOGIN}});
        //LA LINEA DE ARRIBA ES PARA AGREGARLE TOKEN A LAS REQUEST QUE LE HACEMOS A LA BASEDEDATOS
        if(location === ""){
          const res = await axios.get(`noticias`);
          setNoticias(res.data);
        }else{
          const res = await axios.get("noticias" + location.search);
          setNoticias(res.data);
        }
        
      } catch (err) {
        console.log(err);
      }
    };

    listaNoticias();
  }, [location]);

  const mostrarNoticiaa = () => {
    let i = 0;
    return noticias.map((x) => {
      i++;

      if (i === 1) {
        return (
          <>
            <CardPrincipal key={x._id} noticiaProps={x}></CardPrincipal>
          </>
        );
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
          <>
            <Col lg={6} md={6} sm={6}>
              <CardPrincipal key={x._id} noticiaProps={x}></CardPrincipal>
            </Col>
          </>
        );
      }
    });
  };
  return (
    <div className="main">
      <Card className="w-100 bg-dark p-0 m-0 shadow">
        <Card.Img
          src="https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Card image"
          className="w-100 img-titulado-home m-0 p-0"
        />
        <Card.ImgOverlay className="titulado-home">
          <Card.Text className="text-center ">
            <h1 className="display-1 mb-0 pb-0 titulo">RollingPost</h1>
            <h6 className="mt-0 pt-0 subT">El mundo a tu alcance:</h6>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container className="main">
        <Row>
          <Col lg={9} md={9} sm={9} className=" mt-4 mx-auto">
            {mostrarNoticiaa()}
            <Row>{mostrarNoticiaa2()}</Row>
          </Col>
          <Col lg={3} md={3} sm={3} className="sidebar mt-4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            expedita hic, maiores ad odio vel officiis deleniti exercitationem
            voluptates sunt vero fuga iure necessitatibus quaerat omnis neque
            fugit, reprehenderit voluptate! Architecto neque vero, sequi aliquid
            inventore expedita! Eum quo voluptates ut nulla numquam impedit
            tempora natus sunt adipisci ex, quia velit recusandae reiciendis
            blanditiis officiis deserunt nostrum itaque veritatis asperiores
            minima, iure molestiae aut nisi vero. Autem, tempore error? Modi
            assumenda velit voluptates molestias quibusdam quidem laudantium
            temporibus aperiam nam, ratione dolore cupiditate doloremque tempore
            sapiente earum, nisi perferendis odit aliquam ipsum, in asperiores
            suscipit fuga odio? Optio, natus cumque, harum rerum cupiditate
            repellendus magnam eum ratione modi accusantium rem suscipit a
            adipisci quisquam! Placeat voluptas perferendis praesentium
            accusamus assumenda incidunt blanditiis! Fugit, cupiditate amet
            tenetur inventore vel nulla facilis non rem optio reiciendis eos
            autem voluptas necessitatibus quam impedit explicabo sequi quidem
            qui laborum, molestias soluta id! Earum vero, eaque amet maiores
            voluptatibus nisi ut, quisquam similique ab animi vel error aliquid
            officia neque. Sequi mollitia provident, quisquam saepe et odio
            illum repellat. Nobis, quia molestiae exercitationem rerum dicta sit
            ipsum facere modi neque vero natus accusantium sed eius optio ad
            praesentium eaque minima architecto tenetur dolor est unde.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
