import React from 'react';
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";


const sidebar = () => {
    return (
        <div className="sidebar">
        <div className="center">
          <ul>
            <Link to="/perfil" style={{textDecoration: "none"}}>
            <li>
              <DashboardIcon className="icono"></DashboardIcon>
              <span>Dashboard</span>
            </li>
            </Link>
            <p className="titulos">Listas</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <SupervisedUserCircleIcon className="icono"></SupervisedUserCircleIcon>
              <span>Users</span>
            </li>
            </Link>
            <Link to="/perfil/nuevaNoticia" style={{textDecoration: "none"}}>
            <li>
              <NewspaperIcon className="icono"></NewspaperIcon>
              <span>Nueva Noticia</span>
            </li>
            </Link>
            <p className="titulos">Perfil de admin</p>
            <Link to="/" style={{textDecoration: "none"}}>
  
            </Link>

  
            <li>
              <ExitToAppIcon className="icono"></ExitToAppIcon>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default sidebar;