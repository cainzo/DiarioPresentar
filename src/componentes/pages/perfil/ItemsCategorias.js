import React, { useContext, useEffect } from 'react';
import { ListGroup, Button } from "react-bootstrap";



import { deleteCategoria } from '../../../context/categoriaContext/apiCalls';
import { CategoriaContext } from '../../../context/categoriaContext/CategoriaContext';
const ItemsCategorias = (props) => {
  const{categoria, dispatch} = useContext(CategoriaContext)

const handleDelete= (id)=>{
  deleteCategoria(id, dispatch)
}
  
  return (
    <ListGroup.Item className="d-flex justify-content-between text-center align-content-center ">
        {props.categoria.categoria}
        <Button variant="danger" onClick={()=>{handleDelete(props.categoria._id)}}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemsCategorias;
