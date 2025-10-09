// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// Remove BrowserRouter import here
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Render App directly */}
    <App /> 
  </React.StrictMode>,
);