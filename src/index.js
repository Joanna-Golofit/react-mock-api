import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
//drugi link bootstrapa nie ma w dokumentacji?? 
import "bootstrap/dist/js/bootstrap";
import "./server"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
