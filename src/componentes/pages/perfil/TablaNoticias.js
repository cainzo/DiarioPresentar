import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './tablaUsuarios.css'
import { Container,  Table, Form } from "react-bootstrap";
import { deleteNoticia } from '../../../context/noticiaContext/apiCalls';
import { NoticiaContext } from '../../../context/noticiaContext/NoticiaContext';



const TablaNoticias = (props) => {
    const{noticia, dispatch} = useContext(NoticiaContext)
  const [noticias, setNoticias] = useState([]);
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  //useeffect para la tabla de noticias
  useEffect(() => {
    const listaNoticias = async () => {
      try {
        setLoading(true);
        //const res = await axios.get(`noticias${categoria ? "?categoria=" + categoria : ""}`,{headers:{token: "Bearer " + TOKENCUANDO TENGA EL LOGIN}});
        //LA LINEA DE ARRIBA ES PARA AGREGARLE TOKEN A LAS REQUEST QUE LE HACEMOS A LA BASEDEDATOS
        const res = await axios.get(
          `crudnoticias?page=${page}&categoria=${location}`
        );
        setPage(res.data.page);
        setPages(res.data.pages);
        setNoticias(res.data.data);
        setLoading(false);

        
      } catch (err) {
        console.log(err);
      }
    };

    listaNoticias();
  }, [page, location, dispatch]);


  const handleDelete = (id) =>{
   deleteNoticia(id, dispatch)
  }

  //logica de paginacion para la tabla de noticias
  const mostrarPagination = () => {  
   
      if (pages <= 6) {
        if (page <= 5) {
          return [...Array(pages)].map((_, idx) => {
            return (
              <>
                <button
                  key={idx + 1}
                  onClick={() => setPage(idx + 1)}
                  disabled={page === idx + 1 || loading === true}
                  className ="btnPag"
                >
                  {idx + 1}
                </button>
              </>
            );
          });
        } else {
          return [...Array(pages)].map((_, idx) => {
            if (idx === 0 || idx >= pages - 1) {
              return (
                <>
                  <button
                    key={idx + 1}
                    onClick={() => setPage(idx + 1)}
                    disabled={page === idx + 1 || loading === true}
                    className ="btnPag"
                  >
                    {idx + 1}
                  </button>
                </>
              );
            }
          });
        }
      } else {
        if (page <= 5) {
          return [...Array(5)].map((_, idx) => {
            return (
              <>
                <button
                  key={idx + 1}
                  onClick={() => setPage(idx + 1)}
                  disabled={page === idx + 1 || loading === true}
                  className ="btnPag"
                >
                  {idx + 1}
                </button>
              </>
            );
          });
        } else {
          return [...Array(pages)].map((_, idx) => {
            if (
              idx === 0 ||
              idx >= pages - 1 ||
              idx === page - 2 ||
              idx === page - 1 ||
              idx === page
            ) {
              return (
                <>
                  <button
                    key={idx + 1}
                    onClick={() => setPage(idx + 1)}
                    disabled={page === idx + 1 || loading === true}
                    className ="btnPag"
                  >
                    {idx + 1}
                  </button>
                </>
              );
            }
          });
        }
      }
    
  };

    return (
        <Container className="w-100  tabla m-0 p-0">
        <div className="tituloTabla">
          <h4>Noticias:</h4>
          <Link to="/perfil/nuevaNoticia">
          <button className="agregarNoticia">Agregar nueva noticia</button>
          </Link>
        </div>
        <Form.Select
          aria-label=""
          className="w-50 select"
          onChange={(e) => {
            setPage(1);
            setLocation(e.target.value);
          }}
        >
          <option value="">Filtrar por categoria</option>
          {props.categorias.map((categoria) => {
            return (
              <option value={categoria.categoria}>
                {categoria.categoria.charAt(0).toUpperCase() +
                  categoria.categoria.slice(1)}
              </option>
            );
          })}
        </Form.Select>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Fecha</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((n) => {
              return (
                <tr key={n.id}>
                  <td>{n.titulo} </td>
                  <td>{n.autor} </td>
                  <td>{n.createdAt} </td>
                  <td>
                    {n.categoria.charAt(0).toUpperCase() +
                      n.categoria.slice(1)}
                  </td>
                  <td>
                    <div className="btnBorrar" onClick={()=>handleDelete(n._id)}>Borrar</div>
                    <Link to={{ pathname: "editarNoticia/" + n._id}} style={{textDecoration: 'none'}} state={n}>
                    <div className="btnEditar">Editar</div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Container>
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1 || loading === true}
            className ="btnPag"
          >
            &#171;
          </button>
          {mostrarPagination()}
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === pages || loading === true}
            className ="btnPag"
          >
            
            &#187;
          </button>
        </Container>
      </Container>
    );
};

export default TablaNoticias;