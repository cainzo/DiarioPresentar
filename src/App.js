import Home from "./componentes/pages/Home";
import Navigation from "./componentes/common/Navigation";
import Footer from "./componentes/common/Footer";
import Login from "./componentes/pages/Login";
import Reg from "./componentes/pages/Reg";
import PerfilAdmin from "./componentes/pages/perfil/PerfilAdmin";
import EditarNoticia from "./componentes/pages/perfil/EditarNoticia";
import Error404 from "./componentes/pages/Error404";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import "./App.css";
import VerNoticia from "./componentes/pages/VerNoticia";
import NuevaNoticia from "./componentes/pages/perfil/NuevaNoticia";
import Categorias from "./componentes/pages/perfil/Categorias";
import axios from "axios"

function App() {
  const { user } = useContext(AuthContext);
  const [categorias, setCategorias] = useState([]);
  
  useEffect(()=>{
    const getCats = async ()=>{
      try {
        const res = await axios.get("/categorias/");
        setCategorias(res.data);

      } catch (error) {
        console.log(error)
      }
    };
    getCats()
  },[])
  const mostrarPaginasCategorias = () => {
    return categorias.map((c) => {
      return <Route key={c._id} path={"/?categoria=" + c} element={<Home ></Home>}></Route>;
    });
  };

  return (
    <>
    <BrowserRouter>
    <Navigation className="" categorias={categorias} user={user}></Navigation>
      <Routes >
    <Route exact path="/*" element={<Error404></Error404>}></Route>

        <Route path="/">
        <Route
            index
            element={<Home></Home>}
          ></Route>
        </Route>
        <Route path="/perfil" >
          <Route
            index
            element={ user ? user.isAdmin? <PerfilAdmin categorias={categorias}></PerfilAdmin>:<Navigate to="/"/> : <Navigate to="/"/>}
          ></Route>
          <Route path="/perfil/nuevaNoticia">
            <Route
              index
              element={ user ? user.isAdmin?  <NuevaNoticia categorias={categorias}></NuevaNoticia>:<Navigate to="/"/> : <Navigate to="/"/>}
            ></Route>
          </Route>
          <Route path="/perfil/editarNoticia/:nId">
            <Route
              index
              element={user ? user.isAdmin? <EditarNoticia categorias={categorias}> </EditarNoticia>:<Navigate to="/"/> : <Navigate to="/"/>}
            ></Route>
          </Route>
          <Route path="/perfil/categorias">
            <Route
              index
              element={ user ? user.isAdmin? <Categorias categorias={categorias}> </Categorias>:<Navigate to="/"/> : <Navigate to="/"/>}
            ></Route>
          </Route>
        </Route>
        {mostrarPaginasCategorias()}
        <Route
          path="/registro"
          element={!user ? <Reg /> : <Navigate to="/" />}
        ></Route>
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/"/>}
        ></Route>
        <Route
          exact
          path="/vernoticia"
          element={<VerNoticia></VerNoticia>}
        ></Route>
      </Routes>
    <Footer></Footer>

    </BrowserRouter>
    </>
  );
}

export default App;
