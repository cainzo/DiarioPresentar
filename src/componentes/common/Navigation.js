import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
import {AuthContext} from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const Navigation = (props) => {
const {dispatch} = useContext(AuthContext)


  const mostrarBotones = () => { /* funcion para motrar dinamicamente los botones de categorias en la navbar*/
    return props.categorias.map((c) => {
      return (
        <Link to={"/?categoria=" + c.categoria} key={c._id} className="nav-link">
          {c.categoria.charAt(0).toUpperCase() + c.categoria.slice(1)}
        </Link>
      );
    });
  };
/** funcion para cambiar dinamicamente el boton "login" a un menu con las opciones disponibles segun cada tipo de usuario 
 * los usuarios que no son adm no tienen la opcion de ir al su perfil.*/
 const  mostrarPerfil = ()=>{ 
    if(props.user.isAdmin){
      return <>
          <Nav>
                  <NavDropdown
                    id="collasible-nav-dropdown"
                    className="dropdown "
                  >
                    
                    <NavDropdown.Item 
   
                      href="/perfil"
                      className="nddi text-dark"
                    >
                      Perfil
                    </NavDropdown.Item>
                    
                    
                    <NavDropdown.Item 

                    onClick={()=>dispatch(logout())} className="nddi text-dark">
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
      </>
    }else{
      return <>
      <Nav>
              <NavDropdown
                id="collasible-nav-dropdown"
                className="dropdown "
              >                
                <NavDropdown.Item onClick={()=>dispatch(logout())} className="nddi text-dark">
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
  </>
    }
  }
  return (
    <>
      <Navbar expand="lg" className="navbar-bg " variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="">
            RollingPost
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
              mostrarPerfil()
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
