import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
// import { createRoot } from 'react-dom/cjs/react-dom.production.min';

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);