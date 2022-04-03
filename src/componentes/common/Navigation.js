import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = (props) => {
  useEffect(() => {}, []);
  const mostrarBotones = () => {
    return props.categorias.map((c) => {
      return (
        <Link to={"/?categoria=" + c.categoria} key={c.id}className="nav-link">
          {c.categoria.charAt(0).toUpperCase() + c.categoria.slice(1)}
        </Link>
      );
    });
  };
  //console.log(categorias);
  return (
    <>
      <Navbar expand="lg" className="navbar-bg " variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="">
            Diario del pibe
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-auto mx-2"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto contenedor-links">{mostrarBotones()}</Nav>
            {!props.user ? (
              <>
                <Nav>
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                </Nav>
              </>
            ) : (
              <>
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
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
