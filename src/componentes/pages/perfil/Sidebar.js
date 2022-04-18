import React, { useContext} from "react";

import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import {AuthContext} from "../../../context/authContext/AuthContext";
import { logout } from "../../../context/authContext/AuthActions";

const Sidebar = () => {
const {dispatch} = useContext(AuthContext)

    return (
        <div className="sidebar">
        <div className="center">
          <ul className="ul-sidebar">
            <Link to="/perfil" style={{textDecoration: "none"}}>
            <li className="li-sidebar">
              <DashboardIcon className="icono"></DashboardIcon>
              <span>Dashboard</span>
            </li>
            </Link>
            <p className="titulos">Opciones</p>
            <Link to="/perfil/categorias" style={{textDecoration: "none"}}>
            <li className="li-sidebar">
              <SupervisedUserCircleIcon className="icono"></SupervisedUserCircleIcon>
              <span>Categorias</span>
            </li>
            </Link>
            <Link to="/perfil/nuevaNoticia" style={{textDecoration: "none"}}>
            <li className="li-sidebar">
              <NewspaperIcon className="icono"></NewspaperIcon>
              <span>Nueva Noticia</span>
            </li>
            </Link>
            <p className="titulos">Perfil de admin</p>
            <Link to="/" style={{textDecoration: "none"}}>
  
            </Link>

  
            <li className="li-sidebar" onClick={()=>dispatch(logout())}>
              <ExitToAppIcon className="icono" ></ExitToAppIcon>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Sidebar;