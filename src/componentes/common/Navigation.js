import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import buscar from "../../img/buscar.svg";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Modal,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import "./Navigation.css";
const Navigation = () => {
  const [categorias, setCategorias] = useState([
    "Salud",
    "Economia",
    "Policiales",
    "Politica",
    "Deportes",
    "Actualidad",
    "Cine",
  ]);
  useEffect(() => {}, []);
  const mostrarBotones = () => {
    return categorias.map((c) => {
      return (
        <Nav.Link href={c} className="navegar-links">
          {c}
        </Nav.Link>
      );
    });
  };
  //console.log(categorias);
  return (
    <>
      <Navbar expand="lg" className="navbar-bg " variant="light" fixed="top">
        <Container >
            <Navbar.Brand href="/" className="">Diario del pibe</Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ms-auto mx-2"
              />
              <Navbar.Collapse id="basic-navbar-nav" className="">
                <Nav className="me-auto contenedor-links">{mostrarBotones()}</Nav>
                <Nav>
                  <NavDropdown
                    id="collasible-nav-dropdown"
                    className="dropdown "
                  >
                    <NavDropdown.Item
                      href="#action/3.1"
                      className="nddi text-dark"
                    >
                      Perfil
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="#action/3.4 "
                      className="nddi text-dark"
                    >
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};

export default Navigation;
