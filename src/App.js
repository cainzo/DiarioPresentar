import Home from "./componentes/pages/Home";
import Navigation from "./componentes/common/Navigation";
import Login from "./componentes/pages/Login";
import Reg from "./componentes/pages/Reg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
function App() {
  const [categorias, setCategorias] = useState([
    "salud",
    "economia",
    "policiales",
    "politica",
    "deportes",
    "actualidad",
    "cine",
    "categoria",
  ]);
  const user = true;
  const mostrarPaginasCategorias = () => {
    return categorias.map((c) => {
      return (
        <Route
          path={"?categoria=" + c}
          element={<Home ></Home>}
        ></Route>
      );
    });
  };

  return (
    <Router>
      <Navigation className="" categorias={categorias} user={user}></Navigation>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        {mostrarPaginasCategorias()}
        <Route
          exact
          path="/registro"
          element={!user ? <Reg /> : <Navigate to="/" />}
        ></Route>
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
