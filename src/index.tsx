import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/roots/App';
import Error from './components/roots/Error';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)