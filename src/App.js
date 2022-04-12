import Home from "./componentes/pages/Home";
import Navigation from "./componentes/common/Navigation";
import Login from "./componentes/pages/Login";
import Reg from "./componentes/pages/Reg";
import PerfilAdmin from "./componentes/pages/perfil/PerfilAdmin";
import EditarNoticia from "./componentes/pages/perfil/EditarNoticia";
import { productInputs } from "./formSource";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useContext, useState } from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import "./App.css";
import VerNoticia from "./componentes/pages/VerNoticia";
import NuevaNoticia from "./componentes/pages/perfil/NuevaNoticia";
function App() {
  const { user } = useContext(AuthContext);

  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([
    { id: 0, categoria: "salud" },
    { id: 1, categoria: "economia" },
    { id: 2, categoria: "policiales" },
    { id: 3, categoria: "politica" },
    { id: 4, categoria: "deportes" },
    { id: 5, categoria: "actualidad" },
    { id: 6, categoria: "cine" },
  ]);

  const mostrarPaginasCategorias = () => {
    return categorias.map((c) => {
      return <Route path={"/?categoria=" + c} element={<Home></Home>}></Route>;
    });
  };

  return (
    <BrowserRouter>
      <Navigation className="" categorias={categorias} user={user}></Navigation>

      <Routes>
        <Route path="/">
        <Route
            index
            element={<Home></Home>}
          ></Route>
        </Route>
        <Route path="/perfil">
          <Route
            index
            element={<PerfilAdmin categorias={categorias}></PerfilAdmin>}
          ></Route>
          <Route path="/perfil/nuevaNoticia">
            <Route
              index
              element={<NuevaNoticia categorias={categorias}></NuevaNoticia>}
            ></Route>
          </Route>
        </Route>
        {mostrarPaginasCategorias()}
        <Route
          exact
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
    </BrowserRouter>
  );
}

export default App;
