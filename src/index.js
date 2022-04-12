import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AutchContextProvider} from "./context/authContext/AuthContext"

ReactDOM.render(
  <React.StrictMode>
    <AutchContextProvider>
    <App />
    </AutchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



