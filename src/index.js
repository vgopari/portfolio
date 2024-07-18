import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Use HashRouter to deploy in github pages */}
    <HashRouter> 
      <App />
    </HashRouter>
  </React.StrictMode>
);