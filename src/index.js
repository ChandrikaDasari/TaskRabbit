import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Userprofile from './Userprofile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Userprofile />
  </React.StrictMode>
);
