import React, {useState , useContext} from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import ItemsCategorias from "./ItemsCategorias";
import { CategoriaContext } from '../../../context/categoriaContext/CategoriaContext';
import { crearCategoria } from '../../../context/categoriaContext/apiCalls';
const Categorias = (props) => {
    const [categoria, setCategoria]= useState({})
    const {dispatch}=useContext(CategoriaContext);
    const handleChange = (e)=>{
        const value = e.target.value;
        setCategoria({...categoria, [e.target.name]:value})
        console.log(categoria)

      };
    const handleSubmit= (e)=>{
        e.preventDefault()
        crearCategoria(categoria, dispatch)
    }

  return (
    <Row className="text-center">
      <Col lg={1} md={2} xs={12} className="bg-light">
        {/* container de la sidebar  */}
        <Container className=" m-0 p-0 pt-5 sticky-top text-start ">
          <Sidebar></Sidebar>
        </Container>
      </Col>
      <Col lg={4} md={12} xs={12} className="bg-primary mx-auto">
        <Row className=" p-1 bg-dark">
          <Col
            lg={12}
            md={12}
            sm={12}
            className="mt-5 w-100 text-start bg-warning"
          >
            {/*  nueva pagica de categorias */}
            <h3>Categorias:</h3>
            <ListGroup>
              {props.categorias.map((categoria) => (
                <ItemsCategorias
                  key={categoria.id}
                  categoria={categoria}
                ></ItemsCategorias>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Col lg={4} md={12} xs={12} className="bg-danger mx-auto">
        <Row className=" p-1 bg-dark">
          <Col
            lg={12}
            md={12}
            sm={12}
            className="mt-5 w-100 text-start bg-warning"
          >
            {/*  nueva pagica de categorias */}
            <h3>Crear nueva categoria:</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese la nueva categoria</Form.Label>
                 
                <Form.Control type="text" placeholder="categoria"  name="categoria" onChange={handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Categorias;
