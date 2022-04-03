import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Table, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TablaUsuarios from "./TablaUsuarios";
import "./perfilAdmin.css";
import TablaNoticias from "./TablaNoticias";

const PerfilAdmin = (props) => {

  return (
    <div>
      <Row className="  text-center ">
      <Col lg={2} md={2} xs={3} className="bg-light border">
      {/* container de la sidebar  */ }
      <Container className=" m-0 p-0 pt-5 sticky-top text-start" >
        <Sidebar></Sidebar>
      </Container>
      </Col>
      <Col lg={10} md={10} xs={9}>
      <Row className=" p-1">
        {/*  Tabla de noticias */ }
        <Col lg={12} md={12} sm={12} className="mt-5">
          <TablaNoticias categorias={props.categorias}></TablaNoticias>
        </Col>
        {/*  Tabla de Usuario */ }
        <Col lg={12} md={12} sm={12}>
         <TablaUsuarios></TablaUsuarios>
        </Col>
      </Row>
      </Col>
      </Row>
      </div>
   
  );
};

export default PerfilAdmin;
