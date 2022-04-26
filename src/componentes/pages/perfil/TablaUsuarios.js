import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

import './tablaUsuarios.css'
import { Container, Table} from "react-bootstrap";

const TablaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [pageUsuarios, setPageUsuarios] = useState(1);
    const [pagesUsuarios, setPagesUsuarios] = useState(1);
   const [loading, setLoading] = useState(false);

    useEffect(() => {
        const listaUsuarios = async()=>{
          try {
            setLoading(true)
            const res = await axios.get(`https://proyecto-final-gonzalocainzo.herokuapp.com/api/users?page=${pageUsuarios}`);
            setPageUsuarios(res.data.page);
            setPagesUsuarios(res.data.pages);
            setUsuarios(res.data.data);
            setLoading(false)
          } catch (err) {
            console.log(err);
          
          }
         
        };
        listaUsuarios();
      }, [pageUsuarios]);

        //logica de paginacion para la tabla de Usuarios
  const mostrarPaginationUsuarios = () => {
   
    if (pagesUsuarios <= 6) {
      if (pageUsuarios <= 5) {
        return [...Array(pagesUsuarios)].map((_, idx) => {
          return (
          
              <button
                key={idx + 1}
                onClick={() => setPageUsuarios(idx + 1)}
                disabled={pageUsuarios === idx + 1 || loading === true}
                className ="btnPag"
              >
                {idx + 1}
              </button>
           
          );
        });
      } else {
        return [...Array(pagesUsuarios)].map((_, idx) => {
          if (idx === 0 || idx >= pagesUsuarios - 1) {
            return (
            
                <button
                  key={idx + 1}
                  onClick={() => setPageUsuarios(idx + 1)}
                  disabled={pageUsuarios === idx + 1 || loading === true}
                  className ="btnPag"
                >
                  {idx + 1}
                </button>
             
            );
          }
        });
      }
    } else {
      if (pageUsuarios <= 5) {
        return [...Array(5)].map((_, idx) => {
          return (
           
              <button
                key={idx + 1}
                onClick={() => setPageUsuarios(idx + 1)}
                disabled={pageUsuarios === idx + 1 || loading === true}
                className ="btnPag"
              >
                {idx + 1}
              </button>
           
          );
        });
      } else {
        return [...Array(pagesUsuarios)].map((_, idx) => {
          if (
            idx === 0 ||
            idx >= pagesUsuarios - 1 ||
            idx === pageUsuarios - 2 ||
            idx === pageUsuarios - 1 ||
            idx === pageUsuarios
          ) {
            return (
             
                <button
                  key={idx + 1}
                  onClick={() => setPageUsuarios(idx + 1)}
                  disabled={pageUsuarios === idx + 1 || loading === true}
                  className ="btnPag"
                >
                  {idx + 1}
                </button>
              
            );
          }
        });
      }
    }
  
};
    return (
        <Container className="w-100 tabla m-0 p-0">
        <div className="tituloTabla">
            <h4>Lista de  usuarios</h4>
         
            
          </div>
          <br />
          
        <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Usuario </th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((x) => {
                return (
                  <tr key={x._id} >
                    <td >{x.email}</td>
                    <td>{x.createdAt} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Container>

          <button
              onClick={() => {
                setPageUsuarios(pageUsuarios - 1);
              }}
              disabled={pageUsuarios === 1 || loading === true}
              className ="btnPag"
              >
              &#171;
            </button>
            {mostrarPaginationUsuarios()}
            <button
              onClick={() => {
                setPageUsuarios(pageUsuarios + 1);
              }}
              disabled={pageUsuarios === pagesUsuarios || loading === true}
              className ="btnPag"
              >
              
              &#187;
            </button>
         
                </Container>
        </Container>
    );
};

export default TablaUsuarios;