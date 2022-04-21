import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AutchContextProvider} from "./context/authContext/AuthContext"
import {CategoriaContextProvider} from "./context/categoriaContext/CategoriaContext"

ReactDOM.render(
  <React.StrictMode>
    <AutchContextProvider>
      <CategoriaContextProvider>
     <App />
      </CategoriaContextProvider>
    </AutchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



