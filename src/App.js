import Home from "./componentes/pages/Home";
import Navigation from "./componentes/common/Navigation";
import Login from "./componentes/pages/Login";
import Reg from "./componentes/pages/Reg";
import PerfilAdmin from "./componentes/pages/perfil/PerfilAdmin";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import VerNoticia from "./componentes/pages/VerNoticia";
function App() {
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([
    {id:0 , categoria:"salud"},
    {id:1 , categoria:"economia"},
    {id:2 , categoria:"policiales"},
    {id:3 , categoria:"politica"},
    {id:4 , categoria:"deportes"},
    {id:5 , categoria:"actualidad"},
    {id:6 , categoria:"cine"}
  ]);
  const user = false;
  const mostrarPaginasCategorias = () => {
    return categorias.map((c) => {
      return <Route path={"/?categoria=" + c} element={<Home></Home>}></Route>;
    });
  };

  return (
    <Router>
      <Navigation className=""  categorias={categorias} user={user}></Navigation>
      <Routes>
        <Route exact path="/" element={<PerfilAdmin categorias={categorias}></PerfilAdmin>}></Route>
        {mostrarPaginasCategorias()}
        <Route
          exact
          path="/registro"
          element={user ? <Reg /> : <Navigate to="/" />}
        ></Route>
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>{" "}
        <Route
          exact
          path="/vernoticia"
          element={<VerNoticia></VerNoticia>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
