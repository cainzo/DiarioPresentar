import React, { useContext, useEffect } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios"
import { deleteCategoria } from '../../../context/categoriaContext/apiCalls';
import { CategoriaContext } from '../../../context/categoriaContext/CategoriaContext';
const ItemsCategorias = (props) => {
  const{categoria, dispatch} = useContext(CategoriaContext)

  useEffect(()=>{
    console.log(props.categoria._id)
  })
const handleDelete= (id)=>{
  deleteCategoria(id, dispatch)
}
  
  return (
    <ListGroup.Item className="d-flex justify-content-between text-center align-content-center ">

        {props.categoria.categoria }
 
        <Button variant="danger" onClick={()=>{handleDelete(props.categoria._id)}}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemsCategorias;
